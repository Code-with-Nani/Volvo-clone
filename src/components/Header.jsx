import React from 'react'
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <div className='main h-[88vh] lg:h-[94vh] w-screen bg overflow-hidden text-white relative'>


      <div className="upper flex justify-between items-center mx-5 md:mx-10 my-7 select-none">

        <div className="left"><a href="/"><img className='h-[20px]' src={logo} alt="Volvo logo" /></a></div>

        <div className="right medium text-[18px] "><button>Menu</button></div>

      </div>


      
        <div className='lower flex justify-center items-center digital text-[72px] leading-[85px] absolute top-[50%] px-10 lg:left-[50%]'>MADE FOR PEOPLE <br /> BY PEOPLE</div>
      


    </div>
  )
}

export default Header
