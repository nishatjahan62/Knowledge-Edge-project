
import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  const state = [
    { label: "Published Articles", value: 270, icon:"/articleIcon.png" },
    { label: "Active Authors", value: 45,  icon:"/authorIcon.png" },
    { label: "Daily Readers", value: 1500 , icon:"/readerIcon.png"},
  ];
  return (
   <div className="lg:mx-20"> 

   <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-2 lg: gap-6 w-full justify-center items-center pb-10 mt-15 ">
      {state.map((stat, index) => (
        <div
          key={index}
          className="card bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a] rounded-2xl text-center w-60 mx-auto"
        >
            <div className="mx-auto relative  -top-6" ><img  src={stat.icon} alt="" /></div>
          <h2 className="card-title font-bold text-4xl text-center mx-auto ">
            {" "}
            <CountUp 
            end={stat.value}
            duration={3}
            separator=","
            suffix="+"
            ></CountUp>{" "}
          </h2>
          <h3 className="py-5 text-xl font-bold">{stat.label}</h3>
        </div>
      ))}
    </div></div>
  );
};

export default Counter;
