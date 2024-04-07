import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings, arr } from "../assets/data/data";
import img1 from "../assets/images/right.avif";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import img2 from "../assets/images/center.avif";
import img3 from "../assets/images/left.avif";

const Home = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-[#FFFFFF] px-4 lg:px-48 pt-6">
      <h2 className="regular text-[12px] leading-[18px]">EXPLORE VOLVO</h2>
      <p className="medium text-[32px] leading-[35px]">
        For customers around the world
      </p>

      <div className="slider my-16 mb-20 ">
        <Slider {...settings}>
          {arr.map((val, index) => (
            <div key={index} className="relative cursor-pointer">
              <img src={val.src} alt="" />
              <h2 className="absolute inset-0 z-10 text-white top-[40%] pb-10 pl-10 pr-40 uppercase regular text-[14px] leading-[24px]">
                {val.heading}
              </h2>
              <p className="absolute inset-0 z-10 text-white top-[45%] pl-10 pr-40 digital text-[42px] uppercase  ">
                {val.para}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="right-img w-full h-[58vh] lg:h-[54vh] mb-20 flex flex-col lg:flex-row">
        <div className="left lg:w-1/2 w-full">
          <h2 className="regular text-[12px] leading-[18px]">CAREER</h2>
          <p className="medium text-[32px] leading-[35px] pt-4">
            For every person who wants to make real difference
          </p>
          <div className="btn regular text-white flex flex-col lg:flex-row justify-start items-start gap-4 my-4 mb-6">
            <button className="text-[16px] group leading-[24px] bg-[#1251b5] hover:bg-[#0D3C87]  px-8 py-[13px] flex justify-center items-center gap-4 ">
              Join Volvo Group{" "}
              <FaArrowUpRightFromSquare className="group-hover:translate-x-1 transition-transform duration-[0.3s] ease" />{" "}
            </button>
            <button className="text-[16px] group leading-[24px] bg-[#1251b5] hover:bg-[#0D3C87] px-8 py-[13px] flex justify-center items-center gap-4">
              Join Volvo Cars{" "}
              <FaArrowUpRightFromSquare className="group-hover:translate-x-1 transition-transform duration-[0.3s] ease" />
            </button>
          </div>
        </div>

        <div className="right lg:w-1/2 w-full">
          <img className="h-full w-full object-cover" src={img1} alt="" />
        </div>
      </div>

      <div className="center mt-20">
        <img src={img2} alt="" />
      </div>

      <div className="right-img w-full h-[58vh] lg:h-[54vh] mb-10 flex flex-col-reverse lg:flex-row-reverse mt-20">
        <div className="left lg:w-1/2 w-full lg:pl-10 pt-10 lg:pt-0">
          <h2 className="regular text-[12px] leading-[18px]">
            LIFESTYLE COLLECTIONS
          </h2>
          <p className="medium text-[32px] leading-[35px] pt-4">
            Designed and distributed with care
          </p>
          <div className="btn regular text-white flex flex-col lg:flex-row justify-start items-start gap-4 my-4 mb-6">
            <button className="text-[16px] group leading-[24px] bg-[#1251b5] hover:bg-[#0D3C87]  px-8 py-[13px] flex justify-center items-center gap-4 ">
              Volvo Group Shop{" "}
              <FaArrowUpRightFromSquare className="group-hover:translate-x-1 transition-transform duration-[0.3s] ease" />{" "}
            </button>
            <button className="text-[16px] group leading-[24px] bg-[#1251b5] hover:bg-[#0D3C87] px-8 py-[13px] flex justify-center items-center gap-4">
              Volvo Cars Shop{" "}
              <FaArrowUpRightFromSquare className="group-hover:translate-x-1 transition-transform duration-[0.3s] ease" />
            </button>
          </div>
        </div>

        <div className="right lg:w-1/2 w-full">
          <img className="h-full w-full object-cover" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
