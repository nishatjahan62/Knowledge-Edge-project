import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaBookmark, FaRegBookmark, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import toast from "react-hot-toast";
import AuthHook from "../../Hooks/AuthHook";
import Button from "../../Pages/Button/Button";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const ArticleCard = ({ article }) => {
  const { _id, title, excerpt, publication_date, author_name, content, likes, comments } = article;

  const newPublicationDate = new Date(publication_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { user } = AuthHook(); 
  const axiosSecure = UseAxiosSecure(); // ✅ correct destructuring
  const [bookmarked, setBookmarked] = useState(false);

  // 🔍 Check if article is already bookmarked
  useEffect(() => {
    const checkBookmark = async () => {
      if (!user) return;
      try {
        const res = await axiosSecure.get(`/bookmarks/${user.email}`);
        const isBookmarked = res.data.some((a) => a._id === _id);
        setBookmarked(isBookmarked);
      } catch (err) {
        console.error("Failed to check bookmark:", err);
      }
    };
    checkBookmark();
  }, [user, _id, axiosSecure]);

  // 📌 Toggle bookmark
  const handleBookmark = async () => {
    if (!user) {
      toast.error("Please login to save this article!");
      return;
    }

    try {
      const res = await axiosSecure.post("/bookmarks", {
        articleId: _id,
        userEmail: user.email,
      });

      if (res.data.added) {
        toast.success("Article saved to bookmarks!");
        setBookmarked(true);
      } else {
        toast.success("Article removed from bookmarks.");
        setBookmarked(false);
      }
    } catch (err) {
      console.error("Bookmark failed:", err);
      toast.error("Bookmark action failed!");
    }
  };

  // 📄 Download article as PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(title, 10, 20);
    doc.setFontSize(12);
    doc.text(`By ${author_name}`, 10, 30);
    doc.text("--------------------------------------------------", 10, 40);
    doc.text(content || excerpt?.excerpt || "", 10, 50, { maxWidth: 180 });
    doc.save(`${title}.pdf`);
    toast.success("Article downloaded successfully!");
  };

  return (
    <div className="w-full max-w-md mx-auto transition-all duration-300">
      <div className="card bg-[#FDFBD4] dark:bg-[#1F2022] text-gray-900 dark:text-gray-100 
                      h-full overflow-hidden rounded-2xl flex flex-col justify-between 
                      shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 border border-gray-300 dark:border-gray-700">

        <div className="card-body">
          <h2 className="card-title truncate font-extrabold text-xl dark:text-white">{title}</h2>

          <p className="lg:text-lg text-base pt-2 font-semibold">
            Author: <span className="text-blue-700 dark:text-blue-400">{author_name}</span>
          </p>

          <p className="text-sm mt-2 line-clamp-2 text-gray-700 dark:text-gray-300">
            {excerpt?.excerpt || content}
          </p>

          <div className="card-actions justify-end mt-3">
            <button className="py-1 px-3 shadow-md text-sm bg-blue-200 dark:bg-blue-800 dark:text-gray-100 rounded-2xl font-bold">
              {newPublicationDate}
            </button>
          </div>

          <div className="font-medium mt-3 text-gray-800 dark:text-gray-300">
            <p>Comments: <span className="font-semibold text-blue-700 dark:text-yellow-400">{comments}</span></p>
            <p>Likes: <span className="font-semibold text-blue-700 dark:text-yellow-400">{likes}</span></p>
          </div>
        </div>

        {/* --- Footer Buttons --- */}
        <div className="flex justify-center items-center gap-4 p-4 border-t border-gray-300 dark:border-gray-700">
          <Link to={`/article/${_id}`}>
            <Button label="View More" />
          </Link>

          <button
            onClick={handleBookmark}
            className="text-yellow-500 hover:text-yellow-400 dark:text-yellow-400 dark:hover:text-yellow-300 hover:scale-110 transition-transform"
            title="Save for later"
          >
            {bookmarked ? <FaBookmark size={22} /> : <FaRegBookmark size={22} />}
          </button>

          <button
            onClick={handleDownload}
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:scale-110 transition-transform"
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
