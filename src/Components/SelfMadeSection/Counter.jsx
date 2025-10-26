import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Counter = () => {
  const state = [
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
      <h2 className="text-4xl font-bold text-center  mb-10 text-primary ">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-2 lg: gap-6 w-full justify-center items-center pb-10 mt-15 ">
        {state.map((stat, index) => (
          <div
            key={index}
            className="card bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl text-center w-60 mx-auto"
          >
            <div className="mx-auto relative  -top-6">
              <img src={stat.icon} alt="" />
            </div>
            <h2 className="card-title font-bold text-4xl text-center mx-auto ">
             {startCount ? (
          <CountUp end={stat.value} duration={2.5} separator="," suffix='+' />
        ) : (
          "0"
        )}
            </h2>
            <h3 className="py-5 text-xl font-bold">{stat.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
