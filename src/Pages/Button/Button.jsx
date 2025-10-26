import React from "react";

const Button = ({
  label = "",
  onClick,
  className = "",
  type = "button",
  size = "md", // new prop: sm, md, lg
}) => {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`
      "rounded relative inline-flex group items-center justify-center px-3 py-2 m-1 cursor-pointer border-b-4 border-b-[var(--color-primary)] rounded-lg border-l-[var(--color-primary)]  border-l-2 bg-[var(--color-primary)] text-white"
        ${sizes[size]} ${className}
      `}
    >
      <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10 "></span>
      <span class="relative font-bold font-[poppins] text-white">{label}</span>
    </button>
  );
};

export default Button;
