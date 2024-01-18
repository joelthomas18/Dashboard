import React from "react";

const PageNumber = () => {
  return (
    <div className="w-[400px] ml-[25%] mb-3">
      <div className="flex gap-4">
        <button className="rounded-md w-8 h-6 bg-gray-500 font-semibold">
          &#8249;
        </button>
        <button className="rounded-md w-8 h-6 bg-white font-semibold hover:bg-gray-500 ">
          1
        </button>
        <button className="rounded-md w-8 h-6 bg-white font-semibold hover:bg-gray-500 ">
          2
        </button>
        <button className="rounded-md w-8 h-6 bg-white font-semibold hover:bg-gray-500 ">
          ...
        </button>
        <button className="rounded-md w-8 h-6 bg-white font-semibold hover:bg-gray-500 ">
          9
        </button>
        <button className="rounded-md w-8 h-6 bg-white font-semibold hover:bg-gray-500 ">
          10
        </button>
        <button className="rounded-md w-8 h-6 bg-white font-semibold hover:bg-gray-500 ">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PageNumber;
