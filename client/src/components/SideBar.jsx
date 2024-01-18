import React from "react";
import BriefCase from "../assets/BriefCase.png";
import CircledMenu from "../assets/CircledMenu.png";
import Puzzle from "../assets/Puzzle.png";
import Support from "../assets/Support.png";
import Help from "../assets/Help.png";
import StatBoard from "../assets/StatBoard.png";
import Shutdown from "../assets/Shutdown.png";

const SideBar = () => {
  return (
    <nav className="bg-blue-950 h-screen font-serif w-[15%] flex flex-col items-center justify-between sticky top-0 ">
      <div className="flex flex-col items-center mt-5">
        <button>
          <img className="w-14 " src={BriefCase} alt="" />
        </button>
        <img src={StatBoard} alt="" />
      </div>
      <div className="flex flex-col gap-6 mb-9 ml-auto">
        <div className="flex gap-2 bg-white rounded-l-md p-3 menu w-[150px]">
          <img className="w-5" src={CircledMenu} alt="" />
          <button className="text-black text-sm ">Dashboard</button>
        </div>
        <div className="flex gap-2 bg-black rounded-md p-3 menu">
          <img className="w-5" src={Support} alt="" />
          <button className="text-white text-sm">Support</button>
        </div>
        <div className="flex gap-2 bg-black rounded-md p-3 menu">
          <img className="w-5" src={Puzzle} alt="" />
          <button className="text-white text-sm">Plugins</button>
        </div>
        <div className="flex gap-2 bg-black rounded-md p-3 menu">
          <img className="w-5" src={Help} alt="" />
          <button className="text-white text-sm">Help</button>
        </div>
      </div>
      <div className="bg-white w-[190px] flex gap-1 p-1 items-center justify-center">
        <button className="text-red-400 text-sm">Logout</button>
        <img className="object-contain" src={Shutdown} alt="" />
      </div>
    </nav>
  );
};

export default SideBar;
