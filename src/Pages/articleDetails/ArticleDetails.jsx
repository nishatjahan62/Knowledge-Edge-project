import React, {  useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AuthHook from "../../Hooks/AuthHook";
import axios from "axios";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const ArticleDetails = () => {
  const {
    title,
    content,
    publication_date,
    category,
    tags,
    author_name,
    author_photo,
    _id,
  } = useLoaderData();

  const safeTags = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
    ? tags.split(",").map((tag) => tag.trim())
    : [];

  const { user } = AuthHook();

  // comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // likes
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  //   Format publication date:

  const newPublicationDate = new Date(publication_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  useEffect(() => {
    // fetch comments
    axios
      .get(`http://localhost:5000/articles/${_id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));

    // fetch likes
    axios
      .get(`http://localhost:5000/articles/${_id}/likes`)
      .then((res) => {
        setLikes(res.data.likeCount);
      })
      .catch((err) => console.log(err));

    if (user) {
      axios.get("http://localhost:5000/all-articles").then((res) => {
        const articles = res.data.find((ar) => ar._id === _id);
        if (articles?.likeUsers?.includes(user.email)) {
          setLiked(true);
        }
      });
    }
  }, [_id, user]);

  // comments handle =>

  const handleComment = (e) => {
    e.preventDefault();
    if (!user) return;

    const commentData = {
      user_name: user.displayName,
      user_photo: user.photoURL,
      comment: newComment,
    };

    const res = axios.post(
      `http://localhost:5000/articles/${_id}/comments`,
      commentData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    );
    if (res.data.insertedId) {
      setComments((prev) => [
        {
          ...commentData,
          created_at: new Date().toISOString(),
        },
        ...prev,
      ]);
      setNewComment("");
      toast.success("Your comment successfully added");
    }
  };

  // handle likes =>

  const handleLike = () => {
    axios
      .post(
        `http://localhost:5000/articles/${_id}/like`,
        {
          user_email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.alreadyLiked) {
          toast.error("You already liked this article");
        } else {
          toast.success("Thanks fot Liking!");
          setLiked(true);
          setLikes(res.data.likeCount);
        }
      })
      .catch(console.error);
  };

  return (
    <div classNameName="mt-30 mx-8 lg:mx-15 ">
      <div className="bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl">
        <div className="hero ">
          <div className="hero-content ">
            <div className="max-w-md">
              <h1 className="text-2xl lg:text-4xl font-bold pt-5 text-center">
                {title}
              </h1>
              <p className=" text-center text-sm pt-2 font-bold text-blue-800 dark:text-blue-400">
                <span className="text-black dark:text-white pr-1">
                  Published on :{" "}
                </span>{" "}
                {newPublicationDate}
              </p>
              <p className="py-6 text-center">{content}</p>

              <div className="text-left px-5">
                <p className="text-blue-700 dark:text-blue-400 text-lg font-semibold pb-3">
                  {" "}
                  category :{" "}
                  <span className="font-medium text-black dark:text-white pl-2 ">
                    {category}
                  </span>
                </p>
                <h2 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  Tags :
                </h2>
                <ul className=" list-disc list-inside ml-10  space-y-2  ">
                  {safeTags &&
                    safeTags.map((tag, index) => (
                      <li key={index} className="font-medium ">
                        {tag}
                      </li>
                    ))}
                </ul>
              </div>
             
                <div className="relative overflow-visible">
                  <button
                    data-tooltip-id="like-tooltip"
                    data-tooltip-content="Click here to like this article"
                    data-tooltip-place="top"
                       className="flex justify-center items-center mx-auto mt-3 gap-2"
                    onClick={()=>{
                      if(!user){
                        toast.error("you need to login to like this article.")
                        return
                      }
                      handleLike()
                    }}
                 
                  >
                    <i className="fa-solid fa-thumbs-up text-yellow-400 cursor-pointer"></i>
                    {liked ? "liked" : "like"}
                  </button>{" "}
                  <Tooltip id="like-tooltip"></Tooltip>
                  <p className="text-center  pt-2">Total likes : {likes}</p>
                </div>
           
            </div>
          </div>
        </div>
        <hr className="text-blue-800 dark:text-blue-400" />
        <div className="text-center   gap-2  mt-5">
          {" "}
          <div className="avatar ">
            <div className="w-22 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={author_photo} />
            </div>
          </div>
          <div>
            <p className="font-bold">Author</p>
            <p className="pb-5 text-lg font-semibold">{author_name}</p>
          </div>
        </div>
      </div>

      {/* comment */}
     
        <div className="mt-5  bg-[#FDFBD4] dark:bg-[#3a3a3a] p-5 rounded-2xl">
          <form className=" " onSubmit={(e)=>{
            e.preventDefault()
            if(!user){
              toast.error("please login to submit a comment")
              return
            }
            handleComment(e)
          }}>
            <textarea
              name="content"
              className="textarea w-full rounded-2xl flex  lg:max-w-2xl sm:max-w-lg min-w-xs mx-auto"
              placeholder="Write your comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
             
              required
            ></textarea>
            <div>
              <button
                type="submit"
                className=" flex justify-center mx-auto mt-5"
              >
                <div className="relative rounded py-2 px-4 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative text-xl font-bold">Submit comment</span>
                </div>
              </button>
            </div>
          </form>
        </div>
    

      {/* show comments */}
      <div className="bg-white  rounded-2xl p-5 mt-5 dark:bg-[#3a3a3a]">
        {" "}
        <h3 className="text-left px-5 text-2xl font-bold pb-3 text-blue-600 dark:text-blue-400">
          Comments by reader : {comments.length}
        </h3>
        {comments.map((comment, index) => (
          <div>
            <div
              key={index}
              className="bg-[#FDFBD4] dark:bg-[#1D232A] rounded-2xl px-5 py-3"
            >
              <div className="flex items-center gap-5">
                <div>
                  {" "}
                  <img
                    className="lg:w-10 w-8 rounded-full"
                    src={comment.user_photo}
                    alt=""
                  />
                  <p>{(comment && comment.user_name?.split(" ")[0]) || ""}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{comment.comment}</p>

                  <p>{new Date(comment.created_at).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetails;
