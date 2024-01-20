import React from "react";
import { Images } from "../Images";

const Advantages = () => {
  return (
    <div className="flex flex-row-reverse justify-between px-52 py-12 bg-blue-50">
      <div className="flex flex-col gap-6 items-center">
        <img
          src={Images.FrameOne}
          className="w-24 h-24"
        />
        <h1 className="font-Mikhak font-bold">دسترسی آسان و راحت</h1>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <img
          src={Images.FrameTwo}
          className="w-24 h-24"
        />
        <h1 className="font-Mikhak font-bold">پاسخگویی 24 ساعته</h1>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <img
          src={Images.FrameThree}
          className="w-24 h-24"
        />
        <h1 className="font-Mikhak font-bold">خدمات آنلاین</h1>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <img
          src={Images.FrameFour}
          className="w-24 h-24"
        />
        <h1 className="font-Mikhak font-bold">کمترین نرخ خرید</h1>
      </div>
    </div>
  );
};

export default Advantages;
