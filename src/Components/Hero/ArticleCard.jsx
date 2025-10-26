import React, { useState } from "react";
import { Link } from "react-router";
import Button from "../../Pages/Button/Button";
import { FaBookmark, FaRegBookmark, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import toast from "react-hot-toast";
import AuthHook from "../../Hooks/AuthHook";
import axios from "axios";

const ArticleCard = ({ article }) => {
  const {
    _id,
    title,
    excerpt,
    publication_date,
    author_name,
    content,
    likes,
    comments,
  } = article;

  const newPublicationDate = new Date(publication_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const { user } = AuthHook();
  const [bookmarked, setBookmarked] = useState(false);

  // Download PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(title, 10, 20);
    doc.setFontSize(12);
    doc.text(`By ${author_name}`, 10, 30);
    doc.text("--------------------------------------------------", 10, 40);
    doc.text(content || excerpt?.excerpt, 10, 50, { maxWidth: 180 });
    doc.save(`${title}.pdf`);
    toast.success("Article downloaded successfully!");
  };

  // Bookmark feature
  const handleBookmark = async () => {
    if (!user) {
      toast.error("Please login to save this article!");
      return;
    }

    try {
      const res = await axios.post(
        "https://assignment-11-server-sigma-lime.vercel.app/api/bookmarks",
        {
          articleId: _id,
          userEmail: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );

      if (res.data.added) {
        toast.success("Article saved to bookmarks!");
        setBookmarked(true);
      } else {
        toast("Article removed from bookmarks.");
        setBookmarked(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("Bookmark action failed!");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card bg-[#FDFBD4] dark:bg-[#252728] h-full overflow-hidden rounded-2xl flex flex-col justify-between">
        <div className="card-body">
          <h2 className="card-title truncate font-bold text-xl">{title}</h2>
          <p className="lg:text-xl text-lg pt-2 font-bold">
            Author:{" "}
            <span className="text-blue-700 dark:text-blue-400">{author_name}</span>
          </p>
          
          {/* Truncated excerpt */}
          <p className="text-sm mt-2 line-clamp-2">
            {excerpt?.excerpt || content}
          </p>

          <div className="card-actions justify-end mt-2">
            <button className="py-1 px-3 shadow-2xl text-sm bg-blue-200 rounded-2xl text-black font-bold">
              {newPublicationDate}
            </button>
          </div>

          <div className="font-semibold mt-2">
            <p>
              <span className="text-blue-700 pr-1">
                <i className="fa-solid fa-comment"></i>
              </span>
              Comments : {comments}
            </p>
            <p>
              <i className="fa-solid fa-thumbs-up text-yellow-400"></i> Likes : {likes}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 p-4 border-t border-gray-300 dark:border-gray-700">
          <Link to={`/article/${_id}`}>
            <Button label="View More" />
          </Link>

          {/* Bookmark */}
          <button
            onClick={handleBookmark}
            className="text-yellow-500 hover:scale-110 transition-transform"
            title="Save for later"
          >
            {bookmarked ? <FaBookmark size={22} /> : <FaRegBookmark size={22} />}
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="text-blue-500 hover:scale-110 transition-transform"
            title="Download PDF"
          >
            <FaDownload size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
