import React from "react";

const Faq = () => {
  return (
    <div className="lg:pt-20 md:pt-15 pt-10 lg:px-10 px-5 md:px-8 transition-colors duration-500">
      <div className="bg-gradient-to-b from-[#FDFBD4] to-[#cde8ff80] dark:from-[#1a1a1a] dark:to-[#2b2b2b] px-5 py-10 rounded-3xl space-y-4 shadow-2xl border border-blue-100 dark:border-gray-700 transition-all duration-500">
        <div>
          <h2 className="text-center pb-5 font-bold text-3xl font-[poppins] text-[#305CDE] dark:text-blue-300 transition-colors duration-500">
            Here’s What Others Wondered Too
          </h2>
        </div>

        {/* FAQ Items */}
        {[
          {
            q: "How do I create an account?",
            a: "Click the 'Login' button in the top right corner and follow the registration process.",
          },
          {
            q: "How can I post an article?",
            a: "You can submit an article by logging into your account and clicking on the 'Post Article' button in the dashboard. Fill out the required fields and hit publish!",
          },
          {
            q: "Who can write articles on this platform?",
            a: "Anyone with a registered account can write and share articles. Whether you're a student, a professional, or a curious writer — your voice is welcome here.",
          },
          {
            q: "Is my personal information safe?",
            a: "Yes, we prioritize your privacy. Your data is stored securely and never shared with third parties.",
          },
          {
            q: "Is there a way to follow my favorite authors?",
            a: "We’re working on it! Stay tuned for updates where you’ll be able to follow authors and get notified about their new posts.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border border-blue-400/40 dark:border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 shadow-md dark:shadow-gray-900/40"
          >
            <input type="checkbox" className="peer" />

            <div className="collapse-title flex items-center gap-2 bg-[#F4F2D0] dark:bg-[#252728] peer-checked:bg-[#e9e6b8] dark:peer-checked:bg-[#333333] transition-all duration-500">
              <img
                className="w-5 pt-1 opacity-80 dark:opacity-90"
                src="/question.png"
                alt="question icon"
              />
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {item.q}
              </p>
            </div>

            <div className="collapse-content bg-gray-50 dark:bg-[#393939] text-gray-800 dark:text-gray-200 transition-all duration-500">
              <div className="pt-3 leading-relaxed">
                <i className="fa-solid fa-calendar-check pr-2 text-[#305CDE] dark:text-blue-400"></i>
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
