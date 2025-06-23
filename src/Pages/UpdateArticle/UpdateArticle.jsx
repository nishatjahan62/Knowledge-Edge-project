import React from "react";
import AuthHook from "../../Hooks/AuthHook";

import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const UpdateArticle = ({ article, onUpdate }) => {
  const { user } = AuthHook();
  const HandleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (data.tags) {
      data.tags = data.tags.split(",").map((tag) => tag.trim());
    }
    // console.log(article);
    axios
      .put(
        `https://assignment-11-server-sigma-lime.vercel.app/update-article/${article._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            title: "Updated!",
            text: "You have successfully  Updated  your Article. ",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          const updateArticle = { ...article, ...data };
          onUpdate(updateArticle);
        } else {
          toast.error("No changes detected");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <form onSubmit={HandleUpdate}>
        <fieldset className="fieldset bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a]  border-base-300 rounded-box  w-sm sm:w-md lg:w-2xl border mt-15  mx-auto">
          <h2 className="font-[poppins] text-center pt-4 text-2xl lg:text-4xl font-bold text-blue-700 dark:text-blue-400">
            Update your Article here
          </h2>
          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input w-full"
            defaultValue={article.title}
            placeholder="Title"
          />

          <label className="label">Content</label>
          <textarea
            name="content"
            className="textarea w-full"
            defaultValue={article.content}
            placeholder="Content"
          ></textarea>
          <label className="label">tags</label>
          <textarea
            name="tags"
            className="textarea w-full"
            defaultValue={article.tags}
            placeholder="tags(coma separated)"
          ></textarea>

          <label className="label">Categories</label>
          <select
            name="category"
            defaultValue={article.category}
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
            defaultValue={article.author_photo}
            placeholder="Photo url"
          />
          <label className="label">Author Name</label>
          <input
            name="author_name"
            type="text"
            className="input w-full"
            placeholder="user's Name"
            defaultValue={user.displayName}
            readOnly
          />
          <label className="label">Author Email</label>
          <input
            name="author_email"
            type="text"
            className="input w-full"
            placeholder="user's email"
            defaultValue={user.email}
            readOnly
          />
          <label className="label">Date</label>
          <input
            name="publication_date"
            type="date"
            defaultValue={article.publication_date}
            className="input w-full"
          />
          <button type="submit" className=" w-1/2 mt-3 mx-auto cursor-pointer">
            <div class="relative rounded py-2 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative text-xl font-bold">Update Article</span>
            </div>
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateArticle;
