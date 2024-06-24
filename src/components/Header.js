import React, { useState } from "react";
import Search from "../images/Header/search.svg";
import Cancel from "../images/Header/cancel.svg";
import Options from "../images/Header/Options.svg";
import Noti from "../images/Header/noti.svg";
import Avatar from "../images/Header/avatar.svg";
import Up from "../images/Header/up.svg";
import Notification from "./Notification";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="flex items-center justify-between">
      {/* search bar */}
      <div className="flex gap-2">
        <label
          for="search"
          className="group w-[800px] h-[40px] flex items-center 
          justify-between bg-white rounded-full px-4"
        >
          <div className="flex items-center gap-3 w-full">
            <img src={Search} alt="" className="size-[20px]" />
            <input
              id="search"
              type="text"
              placeholder="Tra cứu đơn hàng ..."
              className="w-full placeholder-[#666666] focus:outline-none font-pro"
            />
          </div>
          <button className="hidden">
            <img src={Cancel} alt="" />
          </button>
        </label>
        <button
          className="size-[40px] bg-white flex justify-center 
        items-center rounded-full shadow"
        >
          <img src={Options} alt="" />
        </button>
      </div>
      {/* noti va user */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            className="relative size-[40px] flex items-center rounded-full
            justify-center bg-white hover:bg-[#F2F2F2] shadow-xl"
            onClick={() => setIsClick(!isClick)}
          >
            <img src={Noti} alt="" />
            <span class="absolute top-[10px] right-[10px] flex size-[7px]">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F32034] opacity-75"></span>
              <span class="relative inline-flex rounded-full size-[7px] bg-[#F32034]"></span>
            </span>
          </button>
          <Notification isClick={isClick} />
        </div>
        <div
          className="flex items-center bg-white 
        rounded-full h-[40px] pl-1 pr-2 gap-3"
        >
          <img src={Avatar} alt="" />
          <p className="text-[14px] font-proMedium">SuperShip Test</p>
          <button>
            <img src={Up} alt="" className="stroke-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
