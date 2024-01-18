import React from "react";
import Media from "../assets/Media.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const NameCard = () => {
  return (
    <div className="flex flex-col mt-7 hover:scale-105 cursor-pointer ease-in duration-200">
      <div>
        <img className="" src={Media} />
      </div>
      <div className="flex gap-2 rounded-md shadow-2xl bg-white flex-col justify-center items-center">
        <h1 className="font-bold">John Doe</h1>
        <h1 className="text-sm">CEO</h1>
        <div className="flex items-center gap-4 mb-2">
          <img src={twitter} />
          <img src={facebook} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
};

export default NameCard;
