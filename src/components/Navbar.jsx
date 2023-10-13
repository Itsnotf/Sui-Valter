import React, { useState } from "react";
import Logo from "../assets/SuiLogo.png";
import Ham from "../assets/menu-burger.png";
import Aos from "aos";

function navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);



  return (
    <div className="md:bg-transparent bg-[#222831] min-w-[320px] w-full md:h-[100px] h-[80px] flex items-center justify-between z-30 ">
      {/* <div className="w-[50%] max-w-md right-0  md:bg-[#00ADB5] h-[80px] absolute "></div> */}
      <img src={Logo} alt="" className="md:w-[10%] md:h-auto md:min-w-[90px] w-[20%] ml-[28px] md:ml-[120px] z-20 " />
      <div onClick={handleClick} className="w-[32px] h-[32px] mr-[28px] cursor-pointer">
        <img src={Ham} alt="" className="md:hidden" />
      </div>
      <div className={!nav ? "hidden" : " text-[20px] text-[#eeee]  absolute top-[79px] max-w-[720px] min-w-[450px] w-[100%] max-h-[280px] h-screen  font-semibold bg-[#222831] z-20"}>
        <ul className="flex flex-col gap-[30px]  pt-[30px] cursor-pointer ">
          <li className="border border-x-0 border-t-0 border-b-1 mx-[10px] hover:text-[#00ADB5] hover:-translate-y-1 transition hover:ease-in-out">Home</li>
          <li className="border border-x-0 border-t-0 border-b-1 mx-[10px] hover:text-[#00ADB5] hover:-translate-y-1 transition hover:ease-in-out">Organisasi</li>
          <li className="border border-x-0 border-t-0 border-b-1 mx-[10px] hover:text-[#00ADB5] hover:-translate-y-1 transition hover:ease-in-out">Events</li>
          <li className="border border-x-0 border-t-0 border-b-1 mx-[10px] hover:text-[#00ADB5] hover:-translate-y-1 transition hover:ease-in-out">About Us</li>
        </ul>
      </div>

      <div className=" md:flex hidden  min-w-fit z-20  md:max-w-[40%]">
        <ul className="md:flex hidden flex-row gap-[50px] mr-[120px] text-[#eeee] text-xl font-medium cursor-pointer  ">
          <li className="hover:text-[#222831] hover:-translate-y-1 transition hover:ease-in-out">Home</li>
          <li className="hover:text-[#222831] hover:-translate-y-1 transition hover:ease-in-out">Organisasi</li>
          <li className="hover:text-[#222831] hover:-translate-y-1 transition hover:ease-in-out">Events</li>
          <li className="hover:text-[#222831] hover:-translate-y-1 transition hover:ease-in-out">About Us</li>
        </ul>
      </div>

    </div>
  );
}

export default navbar;
