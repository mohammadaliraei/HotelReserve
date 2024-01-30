import React from "react";
import { Images } from "../Images";

const Advantages = () => {
  return (
    <div className="flex bg-blue-50 ">
      <div className="flex flex-1 flex-row max-w-6xl justify-between md:py-14 py-8 px-6 mx-auto items-center">
        <div className="flex flex-col gap-6 items-center md:w-auto w-16">
          <img
            src={Images.FrameOne}
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <h1 className="font-Mikhak font-bold md:text-xl text-sm h-16 text-center ">
            دسترسی آسان و راحت
          </h1>
        </div>
        <div className="flex flex-col gap-6 items-center md:w-auto w-16">
          <img
            src={Images.FrameTwo}
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <h1 className="font-Mikhak font-bold md:text-lg  text-sm h-16 text-center ">
            پاسخگویی 24 ساعته
          </h1>
        </div>
        <div className="flex flex-col gap-6 items-center md:w-auto w-16 ">
          <img
            src={Images.FrameThree}
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <h1 className="font-Mikhak font-bold md:text-xl text-sm h-16 text-center ">
            خدمات آنلاین
          </h1>
        </div>
        <div className="flex flex-col gap-6 items-center md:w-auto w-16">
          <img
            src={Images.FrameFour}
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <h1 className="font-Mikhak font-bold md:text-xl text-sm h-16 text-center ">
            کمترین نرخ خرید
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
