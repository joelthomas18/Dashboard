import React from "react";
import PageNumber from "./PageNumber";

const Table = ({ apiDataFromTable }) => {
  return (
    <>
      <table className="border-collapse my-6 mx-0 w-[71%] text-sm ml-9 mt-8 font-mono hover:scale-105 cursor-pointer ease-in duration-200 bg-white shadow-xl rounded-md overflow-hidden">
        <thead className="">
          <tr className="border-b border-[#dddddd] text-left font-bold">
            <th className="py-3 px-3.5">Id</th>
            <th className="py-3 px-3.5">Name</th>
            <th className="py-3 px-3.5">Quantity</th>
            <th className="py-3 px-3.5">Price</th>
          </tr>
        </thead>
        <tbody>
          {apiDataFromTable?.map((item) => {
            return (
              <tr className="border-b border-[#dddddd] even:bg-[#f3f3f3]">
                <td className="py-3 px-3.5">{item.id}</td>
                <td className="py-3 px-3.5">{item.name}</td>
                <td className="py-3 px-3.5">{item.quantity}</td>
                <td className="py-3 px-3.5">{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
