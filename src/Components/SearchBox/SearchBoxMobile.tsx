import React from "react";

const SearchBoxMobile = () => {
  return (
    <div
      className="flex h-screen w-full py-8"
      dir="rtl"
    >
      <div className="flex w-full h-screen items-start justify-between ">
        <button className="font-Mikhak border-blue-500 border-b-2 p-4 w-36">
          پرواز خارجی
        </button>
        <button className="font-Mikhak border-b-2 border-gray-500">
          پرواز داخلی
        </button>
      </div>
    </div>
  );
};

export default SearchBoxMobile;
