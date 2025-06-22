import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-5  mt-25  lg:mx-10 font-[lora]">
      <h2 className="lg:text-5xl text-3xl text-center font-bold  text-[#305CDE] pt-5 mb-5 lg:pt-8 font-[poppins] lg:max-w-4xl mx-auto leading-normal">
        "Knowledge Edge – Empowering Students Through Shared Wisdom"
      </h2>
      <div className="flex flex-col gap-4">
        <div className="bg-gradient-to-r from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl py-5 px-3 s">
          <div className="flex gap-2 items-center pb-2">
            <i className="fa-solid fa-star text-2xl text-yellow-500"></i>
            <h2 className="text-2xl text-blue-800 font-bold  font-[poppins] ">
              {" "}
              Our Identity — A Logo that Speaks
            </h2>
          </div>
          <div className="text-base pl-5 font-[quickSand] space-y-2">
            {" "}
            <p>
              {" "}
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i> The
              circular nodes and flowing lines in the{" "}
              <span className="font-semibold">Logo</span> represent the organic
              nature of learning and how ideas are interconnected like a living
              mind.{" "}
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>The
              bold, clean typography of KnowledgeEdge combines intellect and
              sharp innovation.
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>The
              split line — <span className="font-semibold">“Knowledge” </span>{" "}
              above <span className="font-semibold">“Edge” </span> — visually
              reflects depth and progression, leading you from understanding to
              mastery.{" "}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl py-5 px-3">
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-leaf text-2xl text-blue-700"></i>
            <h2 className="text-2xl text-blue-800 font-bold pb-2 font-[poppins] ">
              {" "}
              Color Philosophy
            </h2>
          </div>

          <div className="pl-5 text-base font-[quickSand] space-y-2">
            {" "}
            <p>
              {" "}
              <i class="fa-solid fa-circle-chevron-right text-blue-800 pr-1"></i>
              <span className="font-semibold"> Midnight Blue (#263F94) :</span>{" "}
              A deep tone of trust and wisdom, symbolizing depth of knowledge
              and digital integrity.
            </p>
            <p>
              <i class="fa-solid fa-circle-chevron-right text-blue-800 pr-1"></i>
              <span className="font-semibold"> Ivory Beige (#FFFBD4) :</span>A
              light, welcoming background that speaks of simplicity, openness,
              and warmth.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl py-5 px-3">
          <div className="flex gap-2 items-center pb-2">
            <i className="fa-solid fa-fan text-2xl text-yellow-600"></i>
            <h2 className="text-2xl text-blue-800 font-bold  font-[poppins] ">
              What You Can Do on KnowledgeEdge
            </h2>
          </div>

          <div className="pl-5 text-base font-[quickSand] space-y-2">
            <p>
              <i class="fa-solid fa-newspaper text-amber-400"></i>{" "}
              <span className="font-semibold">Articles :</span> <br />
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i> Browse
              all published articles or filter them by category or author.
              <br /> <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>
              View featured articles – updated regularly based on publication
              date and relevance. <br />{" "}
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i> Dive
              into article details with author info, publication date, and full
              content.
            </p>
            <p>
              <i class="fa-solid fa-comment text-blue-500 pr-2"></i>
              <span className="font-semibold">Comments :</span> <br />
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>
              Engage in thoughtful discussions.
              <br /> <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>{" "}
              Share your insights through a clean, responsive comment system.
              All comments are timestamped, showing active user interaction.
            </p>
            <p>
              <i class="fa-solid fa-heart text-red-500 pr-1 "></i>{" "}
              <span className="font-semibold">Likes :</span> <br />
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>
              Express appreciation by liking articles.
              <br /> <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>{" "}
              Each user can like an article only once, ensuring fairness and
              authenticity. Likes are stored and counted in real time, promoting
              the most valued content.
            </p>
            <p>
              <i class="fa-solid fa-pen-to-square text-indigo-800 pr-2"></i>
              <span className="font-semibold">Post Your Own Articles:</span>{" "}
              <br />
              <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>
              Registered users can publish their own content through an
              easy-to-use form.
              <br /> <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>{" "}
              Articles can be updated or deleted by the author at any time.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl py-5 px-3">
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-bolt text-2xl text-orange-500"></i>
            <h2 className="text-2xl text-blue-800 font-bold pb-2 font-[poppins] ">
              Why Choose Us?
            </h2>
          </div>

          <p className="text-base pl-5 font-[quickSand]">
            <i class="fa-solid fa-newspaper text-amber-400"></i>{" "}
            <span className="font-semibold ">
              KnowledgeEdge is more than just a platform — it's a community of
              learners and leaders. We foster:
            </span>{" "}
            <br />
            <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>
            Quality content
            <br /> <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>
            Collaborative learning <br />
            <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i> User
            security and privacy <br />
            <i class="fa-solid fa-circle-dot text-blue-800 pr-1 "></i>Accessible
            design across devices
          </p>
        </div>
        <div className="bg-gradient-to-r from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl py-5 px-3">
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-bolt text-2xl text-orange-500"></i>
            <h2 className="text-2xl text-blue-800 font-bold pb-2 font-[poppins] ">
              {" "}
              Your Experience, Our Priority
            </h2>
          </div>

          <p className="text-base pl-5 font-[quickSand]">
            <i class="fa-solid fa-square-minus text-blue-800 pr-1"></i> At
            appsEV, your experience matters. Whether you're browsing, reviewing,
            or downloading, we’re focused on creating a fast, smooth, and safe
            environment — free of clutter and full of value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
