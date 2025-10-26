import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";



const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = UseAxiosSecure();
  const userEmail = localStorage.getItem("userEmail"); // logged in user email

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await axiosSecure.get("/all-authors");
        setAuthors(res.data);
        console.log("authors",(res.data))
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, [axiosSecure]);

  const handleFollow = async (authorId) => {
    try {
      await axiosSecure.post(`/authors/${authorId}/follow`, { userEmail });
      setAuthors(authors.map(a => 
        a._id === authorId ? { ...a, followers: [...a.followers, userEmail] } : a
      ));
      alert("Followed author successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to follow");
    }
  };

  if (loading) return <p>Loading authors...</p>;

  return (
    <div className="pt-24 lg:pt-30">
      <h2 className="text-2xl lg:text-3xl text-primary text-center font-bold mb-4">All Authors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-10">
        {authors.map((author) => (
          <div key={author._id} className="border p-4 rounded shadow">
            <img src={author.photo || "https://i.ibb.co/b8kMNMR/image.png"} alt={author.name} className="w-25 h-24 rounded-full mx-auto"/>
            <h3 className="text-xl font-semibold text-center mt-2">{author.name}</h3>
            <p className="text-center text-gray-600">{author.email}</p>
            <p className="text-center mt-2">Followers: {author.followers.length}</p>
            {!author.followers.includes(userEmail) && (
              <button 
                onClick={() => handleFollow(author._id)}
                className="mt-2 w-full bg-blue-500 text-white py-1 rounded"
              >
                Follow
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAuthors;
