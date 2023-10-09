import React, { useState } from "react";
import Logo from "../assets/SuiLogo.png";
import Ham from "../assets/menu-burger.png";

function navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[100px] bg-[#222831] flex items-center justify-between ">
      <div className="md:mx-[50px] mx-4 z-50">
        <img
          src={Logo}
          alt=""
          className="md:w-[150px] md:h-[150px] w-[120px] h-[120px] "
        />
      </div>
      <div className="hidden md:flex md:mx-[100px] z-10 ">
        <ul
          className="md:flex text-[#EEEE] gap-[50px] font-medium text-[20px]
        cursor-pointer "
        >
          <li className="hover:text-[#00ADB5] transition hover:-translate-y-1  ">Home</li>
          <li className="hover:text-[#00ADB5] transition hover:-translate-y-1  ">Organisasi</li>
          <li className="hover:text-[#00ADB5] transition hover:-translate-y-1  ">Events</li>
          <li className="hover:text-[#00ADB5] transition hover:-translate-y-1  ">About Us</li>
        </ul>
      </div>

      <div
        onClick={handleClick}
        className="md:hidden w-[35px] h-[35px] mx-4 z-50"
      >
        <img src={Ham} alt="" />
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "text-[#EEEE] top-0 left-0 items-center justify-center md:hidden absolute w-full h-screen sticky:top-0 flex flex-col bg-[#222831] font-medium z-40"
        }
      >
        <li className="py-6 text-4xl hover:text-[#00ADB5]">Home</li>
        <li className="py-6 text-4xl hover:text-[#00ADB5]">Organisasi</li>
        <li className="py-6 text-4xl hover:text-[#00ADB5]">Events</li>
        <li className="py-6 text-4xl hover:text-[#00ADB5]">About Us</li>
      </ul>
    </div>
  );
}

export default navbar;
