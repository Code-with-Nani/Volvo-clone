import React from "react";
import { items , list } from "../assets/data/data";


const Footer = () => {
  return (
    <div className="min-h-[85vh] w-[100vw] bg-[#131313] lg:px-20 px-4  ">
      <div className="upper  h-[65vh] w-full flex flex-col lg:flex-row lg:py-20 py-16 list-none gap-10 text-white">
        <div className="left h-full lg:w-1/2 ">
          <h2 className="regular text-[13px] leading-[16px] mb-4">
            VOLVO GROUP
          </h2>
          {items.map((val, index) => (
            <li
              key={index}
              className="regular text-[24px] w-fit leading-[35px] mb-2 cursor-pointer hover:text-[#6d6d6e]"
            >
              {val}
            </li>
          ))}
        </div>

        <div className="right h-full lg:w-1/2 ">
          <h2 className="regular text-[13px] leading-[16px] mb-4">
            VOLVO CARS
          </h2>
          {list.map((val, index) => (
            <li
              key={index}
              className="regular text-[24px] w-fit leading-[35px] mb-2 cursor-pointer hover:text-[#6d6d6e]"
            >
              {val}
            </li>
          ))}
        </div>
      </div>

      <div className="lower  flex flex-col justify-center items-start lg:items-end lg:mt-16 mt-52 gap-2 pb-5">
        <h2 className="text-[#6d6d6e] regular text-[12px] leading-[16px]">
          {" "}
          © Copyright AB Volvo 2024
        </h2>
        <h2 className="medium text-[13px] leading-[16px] text-white cursor-pointer hover:text-[#6d6d6e]">
          Privacy . Cookies
        </h2>
      </div>
    </div>
  );
};

export default Footer;
