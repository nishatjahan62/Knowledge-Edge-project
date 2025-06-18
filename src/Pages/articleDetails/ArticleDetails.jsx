
import React from "react";
import { useLoaderData } from "react-router";

const ArticleDetails = () => {
  const {
    title,
    content,
    publication_date,
    category,
    tags,
    author_name,
    author_photo,
  } = useLoaderData();

//   Format publication date:

 const newPublicationDate = new Date(publication_date).toLocaleDateString("en-US",{
    year:"numeric",
    month:"long",
    day:"numeric"
}
)

  return (
    <div className="mt-10 mx-8 lg:mx-15 bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl ">
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
                {tags &&
                  tags.map((tag, index) => (
                    <li key={index} className="font-medium ">
                      {tag}
                    </li>
                  ))}
              </ul>
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
  );
};

export default ArticleDetails;
