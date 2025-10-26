import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const stats = [
    { label: "Published Articles", value: 270, icon: "/articleIcon.png" },
    { label: "Active Authors", value: 45, icon: "/authorIcon.png" },
    { label: "Daily Readers", value: 1500, icon: "/readerIcon.png" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
    else setStartCount(false);
  }, [inView]);

  return (
    <div ref={ref} className="lg:mx-20 mt-10 lg:mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#305CDE] dark:text-blue-400 transition-colors duration-500">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center items-center pb-10 mt-15">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card bg-gradient-to-b from-[#FDFBD4] to-[#57B9FF80] dark:from-[#1a1a1a] dark:to-[#2b2b2b] border border-blue-100 dark:border-gray-600 rounded-2xl text-center w-64 mx-auto shadow-lg dark:shadow-gray-900 hover:shadow-xl dark:hover:shadow-blue-900/30 transition-all duration-500"
          >
            <div className="mx-auto relative -top-6">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-16 h-16 object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>

            <h2 className="card-title font-extrabold text-4xl text-center mx-auto text-gray-900 dark:text-gray-100 transition-colors duration-500">
              {startCount ? (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix="+"
                />
              ) : (
                "0"
              )}
            </h2>

            <h3 className="py-5 text-xl font-semibold text-gray-800 dark:text-gray-300 transition-colors duration-500">
              {stat.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
