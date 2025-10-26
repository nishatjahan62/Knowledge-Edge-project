import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-5 mt-20 lg:mx-10 font-[lora] transition-colors duration-500">
      {/* Title */}
      <h2 className="lg:text-5xl text-3xl text-center font-bold text-[#305CDE] dark:text-blue-400 pt-5 mb-8 lg:pt-8 font-[poppins] lg:max-w-4xl mx-auto leading-normal">
        “KnowledgeEdge – Empowering Students Through Shared Wisdom”
      </h2>

      <div className="flex flex-col gap-6">
        {/* Section 1: Our Identity */}
        <div className="bg-gradient-to-r from-[#FDFBD4] to-[#57B9FF80] dark:from-[#1b1b1b] dark:to-[#2c2c2c] rounded-2xl py-6 px-4 shadow-2xl border border-[#e4e2bb] dark:border-gray-700 transition-all duration-500">
          <div className="flex gap-3 items-center pb-3">
            <i className="fa-solid fa-star text-2xl text-yellow-500"></i>
            <h2 className="text-2xl text-blue-800 dark:text-blue-300 font-bold font-[poppins]">
              Our Identity — A Logo that Speaks
            </h2>
          </div>

          <div className="text-base pl-5 font-[quickSand] space-y-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            <p>
              <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
              The circular nodes and flowing lines in the{" "}
              <span className="font-semibold">Logo</span> represent the organic
              nature of learning and how ideas are interconnected like a living
              mind.
            </p>
            <p>
              <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
              The bold, clean typography of KnowledgeEdge combines intellect and
              sharp innovation.
            </p>
            <p>
              <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
              The split line —{" "}
              <span className="font-semibold">“Knowledge”</span> above{" "}
              <span className="font-semibold">“Edge”</span> — visually reflects
              depth and progression, leading you from understanding to mastery.
            </p>
          </div>
        </div>

        {/* Section 2: Color Philosophy */}
        <div className="bg-gradient-to-r from-[#FDFBD4] to-[#57B9FF80] dark:from-[#1b1b1b] dark:to-[#2c2c2c] rounded-2xl py-6 px-4 shadow-2xl border border-[#e4e2bb] dark:border-gray-700 transition-all duration-500">
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-leaf text-2xl text-blue-700 dark:text-green-400"></i>
            <h2 className="text-2xl text-blue-800 dark:text-blue-300 font-bold pb-2 font-[poppins]">
              Color Philosophy
            </h2>
          </div>

          <div className="pl-5 text-base font-[quickSand] space-y-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            <p>
              <i className="fa-solid fa-circle-chevron-right text-blue-800 dark:text-blue-400 pr-1"></i>
              <span className="font-semibold">Midnight Blue (#263F94):</span>{" "}
              A deep tone of trust and wisdom, symbolizing depth of knowledge
              and digital integrity.
            </p>
            <p>
              <i className="fa-solid fa-circle-chevron-right text-blue-800 dark:text-blue-400 pr-1"></i>
              <span className="font-semibold">Ivory Beige (#FFFBD4):</span> A
              light, welcoming background that speaks of simplicity, openness,
              and warmth.
            </p>
          </div>
        </div>

        {/* Section 3: What You Can Do */}
        <div className="bg-gradient-to-r from-[#FDFBD4] to-[#57B9FF80] dark:from-[#1b1b1b] dark:to-[#2c2c2c] rounded-2xl py-6 px-4 shadow-2xl border border-[#e4e2bb] dark:border-gray-700 transition-all duration-500">
          <div className="flex gap-3 items-center pb-3">
            <i className="fa-solid fa-fan text-2xl text-yellow-600 dark:text-yellow-400"></i>
            <h2 className="text-2xl text-blue-800 dark:text-blue-300 font-bold font-[poppins]">
              What You Can Do on KnowledgeEdge
            </h2>
          </div>

          <div className="pl-5 text-base font-[quickSand] space-y-3 text-gray-800 dark:text-gray-300 leading-relaxed">
            <p>
              <i className="fa-solid fa-newspaper text-amber-400"></i>{" "}
              <span className="font-semibold">Articles:</span> Browse all
              published articles, filter by category, view details with author
              info, and explore featured posts.
            </p>
            <p>
              <i className="fa-solid fa-comment text-blue-500 pr-2"></i>
              <span className="font-semibold">Comments:</span> Engage in
              thoughtful discussions and share your insights through a clean,
              responsive comment system.
            </p>
            <p>
              <i className="fa-solid fa-heart text-red-500 pr-1"></i>{" "}
              <span className="font-semibold">Likes:</span> Express appreciation
              authentically — each like counts once, stored and counted in real
              time.
            </p>
            <p>
              <i className="fa-solid fa-pen-to-square text-indigo-800 dark:text-indigo-400 pr-2"></i>
              <span className="font-semibold">Post Your Own Articles:</span>{" "}
              Registered users can publish, update, or delete their content with
              ease and confidence.
            </p>
          </div>
        </div>

        {/* Section 4: Why Choose Us */}
        <div className="bg-gradient-to-r from-[#FDFBD4] to-[#57B9FF80] dark:from-[#1b1b1b] dark:to-[#2c2c2c] rounded-2xl py-6 px-4 shadow-2xl border border-[#e4e2bb] dark:border-gray-700 transition-all duration-500">
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-bolt text-2xl text-orange-500"></i>
            <h2 className="text-2xl text-blue-800 dark:text-blue-300 font-bold pb-2 font-[poppins]">
              Why Choose Us?
            </h2>
          </div>

          <p className="text-base pl-5 font-[quickSand] text-gray-800 dark:text-gray-300 leading-relaxed">
            <i className="fa-solid fa-newspaper text-amber-400"></i>{" "}
            <span className="font-semibold">
              KnowledgeEdge is more than just a platform — it’s a community of
              learners and leaders.
            </span>
            <br />
            <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
            Quality content
            <br />
            <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
            Collaborative learning
            <br />
            <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
            User security and privacy
            <br />
            <i className="fa-solid fa-circle-dot text-blue-800 dark:text-blue-400 pr-1"></i>
            Accessible design across devices
          </p>
        </div>

        {/* Section 5: Your Experience */}
        <div className="bg-gradient-to-r from-[#FDFBD4] to-[#57B9FF80] dark:from-[#1b1b1b] dark:to-[#2c2c2c] rounded-2xl py-6 px-4 shadow-2xl border border-[#e4e2bb] dark:border-gray-700 transition-all duration-500">
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-hand-holding-heart text-2xl text-pink-500 dark:text-pink-400"></i>
            <h2 className="text-2xl text-blue-800 dark:text-blue-300 font-bold pb-2 font-[poppins]">
              Your Experience, Our Priority
            </h2>
          </div>

          <p className="text-base pl-5 font-[quickSand] text-gray-800 dark:text-gray-300 leading-relaxed">
            <i className="fa-solid fa-square-minus text-blue-800 dark:text-blue-400 pr-1"></i>
            At KnowledgeEdge, your experience matters. Whether you're browsing,
            writing, or learning — we strive to create a smooth, safe, and
            inspiring digital space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
