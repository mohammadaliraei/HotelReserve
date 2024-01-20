import React, { useState } from "react";
import { Images } from "../Components/Images";
import Test from "../Test";
import QuestionHomePage from "../Components/HomePage/QuestionHomePage";

const HomePage = () => {
  const [cityName, SetCityName] = useState<string>("");

  const handelCityBtn = (name: string) => {
    SetCityName(name);
  };
  return (
    <div className="flex justify-center  w-full">
      <div className="flex flex-col h-full  py-[150px] ml-[107px] mr-[107px] ">
        <div className="flex flex-row w-full h-[328px] gap-4 justify-between ">
          <div className="flex flex-col flex-1 gap-4 ">
            <div className="flex flex-1 rounded-md">
              <img
                src={Images.HomePagePictureFour}
                className="h-[150px] object-cover rounded-md"
                alt="Home Page Picture Four"
              />
            </div>
            <div className="flex flex-1 rounded-md">
              <img
                src={Images.HomePagePictureThree}
                className="h-[150px] object-cover rounded-md"
                alt="Home Page Picture Three"
              />
            </div>
          </div>
          <div className="flex h-[316px] bg-Blue rounded-md">
            <img
              src={Images.HomePagePictureOne}
              alt="Home Page Picture One"
            />
          </div>
          <div className="flex  h-[316px] bg-Blue rounded-md">
            <img
              src={Images.HomePagePictureTwo}
              alt="Home Page Picture Two"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <div
            className="w-full pt-4 items-end text-end"
            lang="fa"
          >
            <h1
              lang="fa"
              className="font-Mikhak font-bold text-[18px]"
            >
              پرطرفدار ترین پروازهای داخلی
            </h1>
          </div>
          <div className="flex flex-row-reverse gap-4 ">
            <button
              className={`border-[1px] border-gray-300 rounded-md px-4 py-1 ${
                cityName === "tehran" && "bg-Blue text-white"
              }`}
              onClick={() => handelCityBtn("tehran")}
            >
              تهران
            </button>
            <button
              className={`border-[1px] border-gray-300 rounded-md px-4 py-1 ${
                cityName === "mashhad" && "bg-Blue text-white"
              }`}
              onClick={() => handelCityBtn("mashhad")}
            >
              مشهد
            </button>
            <button
              className={`border-[1px] border-gray-300 rounded-md px-4 py-1 ${
                cityName === "shiraz" && "bg-Blue text-white"
              }`}
              onClick={() => handelCityBtn("shiraz")}
            >
              شیراز
            </button>
            <button
              className={`border-[1px] border-gray-300 rounded-md px-4 py-1 ${
                cityName === "kish" && "bg-Blue text-white"
              }`}
              onClick={() => handelCityBtn("kish")}
            >
              کیش
            </button>
          </div>
          <div className="flex flex-row-reverse gap-4 mt-2">
            <div className="flex flex-1 h-[88px] bg-gray-400 rounded-md">
              01
            </div>
            <div className="flex flex-1 h-[88px] bg-gray-400 rounded-md">
              02
            </div>
            <div className="flex flex-1 h-[88px] bg-gray-400 rounded-md">
              03
            </div>
            <div className="flex flex-1 h-[88px] bg-gray-400 rounded-md">
              04
            </div>
          </div>
          <div className="flex w-full ">
            <QuestionHomePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
