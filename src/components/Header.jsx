import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoCloseOutline } from "react-icons/io5";
import { nav1, nav2 } from "../assets/data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header overflow-hidden">
      <div
        className={`main h-[88vh] lg:h-[94vh] w-screen bg overflow-hidden text-white relative `}
      >
        <div className="upper flex justify-between items-center mx-5 md:mx-10 my-7 select-none">
          <div className="left">
            <a href="/">
              <img className="h-[20px]" src={logo} alt="Volvo logo" />
            </a>
          </div>

          <div className="right medium text-[18px] ">
            <button onClick={handleMenu}>Menu</button>
          </div>
        </div>

        <div className="lower flex justify-center items-center digital text-[72px] leading-[85px] absolute top-[50%] px-10 lg:left-[50%]">
          MADE FOR PEOPLE <br /> BY PEOPLE
        </div>
      </div>

      {isOpen && (
        <div className="menu h-[100vh] w-[100vw] bg-[#FFFFFF] fixed inset-0 pr-8 pl-12 py-5 z-[100] lg:w-[25vw] lg:ml-[75%]">
          <div className="close flex justify-end items-center  ">
            <IoCloseOutline
              onClick={handleMenu}
              className="text-5xl text-[#53565A] "
            />
          </div>

          <div className="items1 list-none mt-5">
            <h2 className="regular text-[13px] leading-[18px] uppercase text-[#53565A]">
              Our Offering
            </h2>
            {nav1.map((val, index) => (
              <li
                key={index}
                onClick={closeMenu}
                className="regular text-[24px] mt-3"
              >
                {" "}
                {val}
              </li>
            ))}
          </div>

          <div className="items2 list-none mt-5">
            <h2 className="regular text-[13px] leading-[18px] uppercase text-[#53565A]">
              Careers
            </h2>
            {nav2.map((val, index) => (
              <li
                key={index}
                onClick={closeMenu}
                className="regular text-[24px] mt-3"
              >
                {" "}
                {val}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
