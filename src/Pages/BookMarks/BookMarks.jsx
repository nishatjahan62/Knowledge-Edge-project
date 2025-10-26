import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AuthHook from "../../Hooks/AuthHook";
import ArticleCard from "../../Components/Hero/ArticleCard";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Bookmarks = () => {
  const { user } = AuthHook();
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const axiosSecure = UseAxiosSecure(); // use your secure axios instance

  useEffect(() => {
    if (!user) return;

    const fetchBookmarks = async () => {
      try {
        const res = await axiosSecure.get(`/bookmarks/${user.email}`);
        setBookmarkedArticles(res.data);
      } catch (err) {
        console.error("Failed to fetch bookmarks:", err);
        toast.error("Failed to fetch bookmarks");
      }
    };

    fetchBookmarks();
  }, [user, axiosSecure]);

  return (
    <div className="sm:pt-34 pt-24">
      <h2 className="text-2xl sm:text-3xl text-primary text-center font-bold mb-4">My Bookmarked Articles</h2>
      {bookmarkedArticles.length === 0 && <p>No bookmarks yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 sm:px-8 lg:px-10">
        {bookmarkedArticles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
