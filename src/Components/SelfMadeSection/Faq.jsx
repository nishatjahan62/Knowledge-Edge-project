import React from "react";

const Faq = () => {
  return (
    <div className="lg:pt-20 md:pt-15 pt-10 lg:px-10 px-5 md:px-8  ">
      <div className="bg-[#FDFBD4]  dark:bg-[#252728] dark:to-[#3a3a3a] px-5 py-10 rounded-3xl space-y-3 shadow-2xl">
        <div>
          <h2 className="text-center pb-5 font-bold text-3xl font-[poppins] text-[#305CDE] dark:text-[#f3f1d3] ">
            Here’s What Others Wondered Too
          </h2>
        </div>
        {/* Question-01 */}
        <div
          tabIndex={0}
          className="bg-base-100 collapse collapse-plus  border-1 border-blue-500 rounded-2xl"
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title collapse-plus  bg-[#F4F2D0]    dark:bg-[#252728] peer-checked:bg-[#F4F2D0] 
            dark:peer-checked:bg-[#252728]
          "
          >
            <div className="flex items-center gap-2">
              <img className="w-5 pt-1" src="/question.png" alt="" />{" "}
              <p className="font-semibold">
                How do I create an account?
              </p>
            </div>
          </div>

          <div className="collapse-content bg-primary shadow-2xl peer-checked:bg-gray-50
          dark:peer-checked:bg-[#393939]
           ">
            <div className="pt-3">
              <i class="fa-solid fa-calendar-check pr-2"></i>
              Click the "Login" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        </div>
        {/* Question-02*/}
         <div
          tabIndex={0}
          className="bg-base-100 collapse collapse-plus  border-1 border-blue-500 rounded-2xl"
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title collapse-plus  bg-[#F4F2D0]    dark:bg-[#252728] peer-checked:bg-[#F4F2D0] 
            dark:peer-checked:bg-[#252728]
          "
          >
            <div className="flex items-center gap-2">
              <img className="w-5 pt-1" src="/question.png" alt="" />{" "}
              <p className="font-semibold">
              How can I Post an article?
              </p>
            </div>
          </div>

          <div className="collapse-content bg-primary shadow-2xl peer-checked:bg-gray-50
          dark:peer-checked:bg-[#393939]
           ">
            <div className="pt-3">
              <i class="fa-solid fa-calendar-check pr-2"></i>
            You can submit an article by logging into your account and clicking on the "Post Article" button in the dashboard. Fill out the required fields and hit publish!
            </div>
          </div>
        </div>
        {/* Question-03 */}
        <div
          tabIndex={0}
          className="bg-base-100 collapse collapse-plus  border-1 border-blue-500 rounded-2xl"
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title collapse-plus  bg-[#F4F2D0]    dark:bg-[#252728] peer-checked:bg-[#F4F2D0] 
            dark:peer-checked:bg-[#252728]
          "
          >
            <div className="flex items-center gap-2">
              <img className="w-5 pt-1" src="/question.png" alt="" />{" "}
              <p className="font-semibold">
                Who can write articles on this platform?
              </p>
            </div>
          </div>

          <div className="collapse-content bg-primary shadow-2xl peer-checked:bg-gray-50
          dark:peer-checked:bg-[#393939]
           ">
            <div className="pt-3">
              <i class="fa-solid fa-calendar-check pr-2"></i>
             Anyone with a registered account can write and share articles. Whether you're a student, a professional, or a curious writer — your voice is welcome here.
            </div>
          </div>
        </div>
        {/* Question-04 */}
        <div
          tabIndex={0}
          className="bg-base-100 collapse collapse-plus  border-1 border-blue-500 rounded-2xl"
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title collapse-plus  bg-[#F4F2D0]    dark:bg-[#252728] peer-checked:bg-[#F4F2D0] 
            dark:peer-checked:bg-[#252728]
          "
          >
            <div className="flex items-center gap-2">
              <img className="w-5 pt-1" src="/question.png" alt="" />{" "}
              <p className="font-semibold">
                Is my personal information safe
              </p>
            </div>
          </div>

          <div className="collapse-content bg-primary shadow-2xl peer-checked:bg-gray-50
          dark:peer-checked:bg-[#393939]
           ">
            <div className="pt-3">
              <i class="fa-solid fa-calendar-check pr-2"></i>
              Yes, we prioritize your privacy. Your data is stored securely and never shared with third parties.
            </div>
          </div>
        </div>
        {/* Question-05 */}
         <div
          tabIndex={0}
          className="bg-base-100 collapse collapse-plus  border-1 border-blue-500 rounded-2xl"
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title collapse-plus  bg-[#F4F2D0]    dark:bg-[#252728] peer-checked:bg-[#F4F2D0] 
            dark:peer-checked:bg-[#252728]
          "
          >
            <div className="flex items-center gap-2">
              <img className="w-5 pt-1" src="/question.png" alt="" />{" "}
              <p className="font-semibold">
                Is there a way to follow my favorite authors
              </p>
            </div>
          </div>

          <div className="collapse-content bg-primary shadow-2xl peer-checked:bg-gray-50
          dark:peer-checked:bg-[#393939]
           ">
            <div className="pt-3">
              <i class="fa-solid fa-calendar-check pr-2"></i>
            We’re working on it! Stay tuned for updates where you’ll be able to follow authors and get notified about their new posts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
