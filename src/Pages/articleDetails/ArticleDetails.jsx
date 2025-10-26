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

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(false);

  const newPublicationDate = new Date(publication_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/comments`)
      .then((res) => setComments(res.data))
      .catch(console.log);

    axios
      .get(`https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/likes`)
      .then((res) => setLikes(res.data.likeCount))
      .catch(console.log);

    if (user) {
      axios
        .get("https://assignment-11-server-sigma-lime.vercel.app/all-articles")
        .then((res) => {
          const articles = res.data.find((ar) => ar._id === _id);
          if (articles?.likeUsers?.includes(user.email)) setLiked(true);
        });

      axios
        .get(`https://assignment-11-server-sigma-lime.vercel.app/bookmarks?email=${user.email}`)
        .then((res) => {
          if (res.data?.bookmarkedIds?.includes(_id)) setBookmarked(true);
        })
        .catch(console.error);

      axios
        .get(`https://assignment-11-server-sigma-lime.vercel.app/authors/${author_email}/followers`)
        .then((res) => {
          setFollowers(res.data.followerCount || 0);
          if (res.data.followerUsers?.includes(user.email)) setFollowing(true);
        })
        .catch(console.error);
    }
  }, [_id, user]);

  const handleComment = async (e) => {
    e.preventDefault();
    if (!user) return;

    const commentData = { user_name: user.displayName, user_photo: user.photoURL, comment: newComment };

    try {
      const res = await axios.post(
        `https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/comments`,
        commentData,
        { headers: { Authorization: `Bearer ${localStorage.getItem("access-token")}` } }
      );

      if (res.data.insertedId) {
        setComments((prev) => [{ ...commentData, created_at: new Date().toISOString() }, ...prev]);
        setNewComment("");
        toast.success("Your comment successfully added");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = () => {
    if (!user) return toast.error("You need to login to like this article.");

    axios
      .post(
        `https://assignment-11-server-sigma-lime.vercel.app/articles/${_id}/like`,
        { user_email: user.email },
        { headers: { Authorization: `Bearer ${localStorage.getItem("access-token")}` } }
      )
      .then((res) => {
        if (res.data.alreadyLiked) toast.error("You already liked this article");
        else {
          toast.success("Thanks for Liking!");
          setLiked(true);
          setLikes(res.data.likeCount);
        }
      })
      .catch(console.error);
  };

  const handleBookmark = () => {
    if (!user) return toast.error("You need to login to bookmark articles.");

    axios
      .post(
        `https://assignment-11-server-sigma-lime.vercel.app/bookmarks`,
        { user_email: user.email, article_id: _id },
        { headers: { Authorization: `Bearer ${localStorage.getItem("access-token")}` } }
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

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const handleFollow = () => {
    if (!user) return toast.error("You need to login to follow this author.");

    axios
      .post(
        `https://assignment-11-server-sigma-lime.vercel.app/authors/${author_email}/follow`,
        { user_email: user.email },
        { headers: { Authorization: `Bearer ${localStorage.getItem("access-token")}` } }
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
    <div className="mx-8 lg:mx-15 dark:bg-[#121212] dark:text-white">
      <div className="bg-gradient-to-b from-[#FDFBD4] to-[#57B9FF80] dark:from-[#252728] dark:to-[#3a3a3a] rounded-2xl mt-8 p-5 lg:mx-15">
        <div className="hero">
          <div className="hero-content flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-bold pt-5 text-center">{title}</h1>
            <p className="text-center text-sm pt-2 font-bold text-blue-800 dark:text-blue-400">
              <span className="text-black dark:text-white pr-1">Published on:</span> {newPublicationDate}
            </p>
            <p className="py-6 text-center">{content}</p>

            <div className="text-left px-5">
              <p className="text-blue-700 dark:text-blue-400 text-lg font-semibold pb-3">
                category: <span className="font-medium text-black dark:text-white pl-2">{category}</span>
              </p>
              <h2 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-400">Tags:</h2>
              <ul className="list-disc list-inside ml-10 space-y-2">
                {safeTags.map((tag, index) => (
                  <li key={index} className="font-medium">{tag}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center mt-4">
              <button
                data-tooltip-id="like-tooltip"
                data-tooltip-content="Click here to like this article"
                className="flex justify-center items-center gap-2 mt-3"
                onClick={handleLike}
              >
                <i className="fa-solid fa-thumbs-up text-yellow-400 cursor-pointer"></i>
                {liked ? "Liked" : "Like"}
              </button>
              <Tooltip id="like-tooltip" />
              <p className="text-center pt-2">Total likes: {likes}</p>

              <button
                onClick={handleBookmark}
                className="flex justify-center items-center gap-2 mt-3"
                data-tooltip-id="bookmark-tooltip"
                data-tooltip-content="Save this article for later"
              >
                {bookmarked ? <FaBookmark className="text-blue-600 text-xl" /> : <FaRegBookmark className="text-gray-500 text-xl" />}
                {bookmarked ? "Bookmarked" : "Bookmark"}
              </button>
              <Tooltip id="bookmark-tooltip" />

              <button
                onClick={handleDownload}
                className="flex justify-center items-center gap-2 mt-3"
                data-tooltip-id="download-tooltip"
                data-tooltip-content="Download this article as txt"
              >
                <i className="fa-solid fa-download"></i> Download
              </button>
              <Tooltip id="download-tooltip" />
            </div>
          </div>
        </div>

        <hr className="border-blue-800 dark:border-blue-400 my-5" />

        <div className="text-center gap-2 my-5 pb-10">
          <div className="avatar">
            <div className="w-22 rounded-full">
              <img alt="author" src={author_photo} />
            </div>
          </div>
          <div>
            <p className="font-bold">Author</p>
            <p className="pb-1 text-lg font-semibold">{author_name}</p>
            <Button
              type="button"
              onClick={handleFollow}
              label={`${following ? "Following" : "Follow"} (${followers})`}
              className={`px-4 py-2 rounded-lg font-semibold ${following ? "bg-gray-400 text-black dark:text-white" : "bg-blue-600 text-white"}`}
            />
          </div>
        </div>
      </div>

      {/* comment */}
      <div className="mt-5 bg-[#FDFBD4] dark:bg-[#3a3a3a] p-5 rounded-2xl">
        <form onSubmit={handleComment}>
          <textarea
            name="content"
            className="textarea w-full rounded-2xl flex lg:max-w-2xl sm:max-w-lg min-w-xs mx-auto dark:bg-[#252728] dark:text-white"
            placeholder="Write your comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
          <div className="flex justify-center mx-auto mt-5">
            <Button type="submit" label="Submit comment" />
          </div>
        </form>
      </div>

      {/* show comments */}
      <div className="bg-white rounded-2xl p-5 mt-5 dark:bg-[#1D232A]">
        <h3 className="text-left px-5 text-2xl font-bold pb-3 text-blue-600 dark:text-blue-400">
          Comments by reader: {comments.length}
        </h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <div className="bg-[#FDFBD4] dark:bg-[#252728] rounded-2xl px-5 py-3 my-2">
              <div className="flex items-center gap-5">
                <div>
                  <img className="lg:w-10 w-8 rounded-full" src={comment.user_photo} alt="" />
                  <p>{comment.user_name?.split(" ")[0]}</p>
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
