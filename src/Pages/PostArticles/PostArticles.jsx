import React from "react";
import AuthHook from "../../Hooks/AuthHook";
import axios from "axios";
import Swal from "sweetalert2";

const PostArticles = () => {
  const { user } = AuthHook();
  const handlePostArticles = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { ...restArticles } = data;
    restArticles.tags = restArticles.tags.split(",").map((res) => res.trim());

    // add new article in database
    axios
      .post("http://localhost:5000/articles", restArticles)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            title: "Posted!",
            text: "You have successfully  posted  this Article. ",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" pt-20 ">
      <form onSubmit={handlePostArticles}>
        <fieldset className="fieldset bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a]  border-base-300 rounded-box  w-sm sm:w-md lg:w-2xl border p-4 mt-15 mx-auto">
          <h2 className="font-[poppins] text-center pt-4 text-2xl lg:text-4xl font-bold text-blue-700 dark:text-blue-400">
            Post Article here
          </h2>
          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input w-full"
            placeholder="Title"
          />

          <label className="label">Content</label>
          <textarea
            name="content"
            className="textarea w-full"
            placeholder="Content"
          ></textarea>
          <label className="label">tags</label>
          <textarea
            name="tags"
            className="textarea w-full"
            placeholder="tags(coma separated)"
          ></textarea>

          <label className="label">Categories</label>
          <select
            name="category"
            defaultValue="Select category"
            className="select w-full"
          >
            <option disabled={true}>Select category</option>
            <option>Technology</option>
            <option>Science</option>
            <option>Education</option>
            <option>Environment</option>
            <option>Art</option>
            <option>Health</option>
            <option>Philosophy</option>
            <option>culture</option>
          </select>
          <label className="label">Author's Photo+</label>
          <input
            name="author_photo"
            type="url"
            className="input w-full"
            placeholder="Photo url"
          />
          <label className="label">Author Name</label>
          <input
            name="author_name"
            type="text"
            className="input w-full"
            placeholder="user's Name"
            value={user.displayName}
            readOnly
          />
          <label className="label">Author Email</label>
          <input
            name="author_email"
            type="text"
            className="input w-full"
            placeholder="user's email"
            value={user.email}
            readOnly
          />
          <label className="label">Date</label>
          <input name="publication_date" type="date" className="input w-full" />
          <button type="submit" className=" w-1/2 mt-3 mx-auto cursor-pointer">
            <div class="relative rounded py-2 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative text-xl font-bold">Post Article</span>
            </div>
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PostArticles;
