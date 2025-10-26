import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AuthHook from "../../Hooks/AuthHook";
import axios from "axios";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Button from "../Button/Button";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

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
    author_email,
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

  // bookmark
  const [bookmarked, setBookmarked] = useState(false);

  // follow
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(false);

  // Format publication date:
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
      .get(
        `https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/comments`
      )
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));

    // fetch likes
    axios
      .get(
        `https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/likes`
      )
      .then((res) => {
        setLikes(res.data.likeCount);
      })
      .catch((err) => console.log(err));

    // fetch bookmark and like status
    if (user) {
      axios
        .get("https://assignment-11-server-sigma-lime.vercel.app/all-articles")
        .then((res) => {
          const articles = res.data.find((ar) => ar._id === _id);
          if (articles?.likeUsers?.includes(user.email)) setLiked(true);
        });

      axios
        .get(
          `https://assignment-11-server-sigma-lime.vercel.app/bookmarks?email=${user.email}`
        )
        .then((res) => {
          if (res.data?.bookmarkedIds?.includes(_id)) setBookmarked(true);
        })
        .catch(console.error);

      // fetch follower info
      axios
        .get(
          `https://assignment-11-server-sigma-lime.vercel.app/authors/${author_email}/followers`
        )
        .then((res) => {
          setFollowers(res.data.followerCount || 0);
          if (res.data.followerUsers?.includes(user.email)) setFollowing(true);
        })
        .catch(console.error);
    }
  }, [_id, user]);

  // comments handle
  const handleComment = (e) => {
    e.preventDefault();
    if (!user) return;

    const commentData = {
      user_name: user.displayName,
      user_photo: user.photoURL,
      comment: newComment,
    };

    const res = axios.post(
      `https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/comments`,
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

  // handle likes
  const handleLike = () => {
    if (!user) {
      toast.error("You need to login to like this article.");
      return;
    }

    axios
      .post(
        `https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/like`,
        { user_email: user.email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.alreadyLiked)
          toast.error("You already liked this article");
        else {
          toast.success("Thanks for Liking!");
          setLiked(true);
          setLikes(res.data.likeCount);
        }
      })
      .catch(console.error);
  };

  // handle bookmark
  const handleBookmark = () => {
    if (!user) {
      toast.error("You need to login to bookmark articles.");
      return;
    }

    axios
      .post(
        `https://assignment-11-server-sigma-lime.vercel.app/bookmarks`,
        { user_email: user.email, article_id: _id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.alreadyBookmarked) toast.error("Already bookmarked");
        else {
          toast.success("Article bookmarked!");
          setBookmarked(true);
        }
      })
      .catch(console.error);
  };

  // handle download
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  // handle follow
  const handleFollow = () => {
    if (!user) {
      toast.error("You need to login to follow this author.");
      return;
    }

    axios
      .post(
        `https://assignment-11-server-sigma-lime.vercel.app/authors/${author_email}/follow`,
        { user_email: user.email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.alreadyFollowing) toast.error("Already following");
        else {
          toast.success("Now following author!");
          setFollowing(true);
          setFollowers(res.data.followersCount);
        }
      })
      .catch(console.error);
  };

  return (
    <div classNameName=" mx-8 lg:mx-15 ">
      <div className="bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl mt-30 mx-8 lg:mx-15">
        <div className="hero ">
          <div className="hero-content ">
            <div className="max-w-md">
              <h1 className="text-2xl lg:text-4xl font-bold pt-5 text-center">
                {title}
              </h1>
              <p className=" text-center text-sm pt-2 font-bold text-blue-800 dark:text-blue-400">
                <span className="text-black dark:text-white pr-1">
                  Published on :{" "}
                </span>
                {newPublicationDate}
              </p>
              <p className="py-6 text-center">{content}</p>

              <div className="text-left px-5">
                <p className="text-blue-700 dark:text-blue-400 text-lg font-semibold pb-3">
                  category :{" "}
                  <span className="font-medium text-black dark:text-white pl-2">
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

              <div className="relative overflow-visible flex flex-col items-center mt-4">
                <button
                  data-tooltip-id="like-tooltip"
                  data-tooltip-content="Click here to like this article"
                  data-tooltip-place="top"
                  className="flex justify-center items-center mx-auto mt-3 gap-2"
                  onClick={handleLike}
                >
                  <i className="fa-solid fa-thumbs-up text-yellow-400 cursor-pointer"></i>
                  {liked ? "liked" : "like"}
                </button>
                <Tooltip id="like-tooltip"></Tooltip>
                <p className="text-center pt-2">Total likes : {likes}</p>

                <button
                  onClick={handleBookmark}
                  className="flex justify-center items-center mx-auto mt-3 gap-2"
                  data-tooltip-id="bookmark-tooltip"
                  data-tooltip-content="Save this article for later"
                  data-tooltip-place="top"
                >
                  {bookmarked ? (
                    <FaBookmark className="text-blue-600 text-xl" />
                  ) : (
                    <FaRegBookmark className="text-gray-500 text-xl" />
                  )}
                  {bookmarked ? "Bookmarked" : "Bookmark"}
                </button>
                <Tooltip id="bookmark-tooltip" />

                <button
                  onClick={handleDownload}
                  className="flex justify-center items-center mx-auto mt-3 gap-2"
                  data-tooltip-id="download-tooltip"
                  data-tooltip-content="Download this article as txt"
                  data-tooltip-place="top"
                >
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <Tooltip id="download-tooltip" />
              </div>
            </div>
          </div>
        </div>
        <hr className="text-blue-800 dark:text-blue-400" />
        <div className="text-center gap-2 my-5 pb-10">
          <div className="avatar">
            <div className="w-22 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={author_photo} />
            </div>
          </div>
          <div>
            <p className="font-bold">Author</p>
            <p className="pb-1 text-lg font-semibold">{author_name}</p>

            {/* Follow Button */}
            <div className="">
              {" "}
              <Button
                type="button"
                onClick={handleFollow}
                label={`${following ? "Following" : "Follow"} (${followers})`}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  following ? "bg-gray-400" : "bg-blue-600 text-white"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* comment */}
      <div className="mt-5 bg-[#FDFBD4] dark:bg-[#3a3a3a] p-5 rounded-2xl mx-8 lg:mx-15">
        <form onSubmit={handleComment}>
          <textarea
            name="content"
            className="textarea w-full rounded-2xl flex lg:max-w-2xl sm:max-w-lg min-w-xs mx-auto"
            placeholder="Write your comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
          <div className="flex justify-center mx-auto mt-5">
            <Button type="submit" label="Submit comment"></Button>
          </div>
        </form>
      </div>

      {/* show comments */}
      <div className="bg-white rounded-2xl p-5 mt-5 dark:bg-[#3a3a3a] mx-8 lg:mx-15">
        <h3 className="text-left px-5 text-2xl font-bold pb-3 text-blue-600 dark:text-blue-400">
          Comments by reader : {comments.length}
        </h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <div className="bg-[#FDFBD4] dark:bg-[#1D232A] rounded-2xl px-5 py-3">
              <div className="flex items-center gap-5">
                <div>
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
