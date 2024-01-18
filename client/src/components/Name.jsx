import React from "react";

const Name = () => {
  return (
    <div className="flex justify-between p-4 items-center ">
      <div className="">
        <h1 className="ml-5">Good Morning !☀️</h1>
      </div>
      <div className="flex flex-col bg-white rounded-md border h-9 pl-2 pr-2 mr-2 hover:scale-105 cursor-pointer ease-in duration-200 justify-center">
        <h1 className="text-[10px]">John Doe</h1>
        <h1 className="text-[9px] font-bold">john@doe.com</h1>
      </div>
    </div>
  );
};

export default Name;
