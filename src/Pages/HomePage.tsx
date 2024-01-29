import React from "react";
import { Images } from "../Components/Images";

const HomePage = () => {
  return (
    <div
      className="flex flex-col w-full h-screen mt-36 px-36"
      dir="rtl"
    >
      <div className="flex flex-row gap-4 justify-between items-center bg-green-600">
        <div>
          <img src={Images.HomePagePictureOne} />
        </div>
        <div>
          <img src={Images.HomePagePictureTwo} />
        </div>
        <div className="flex flex-col ">
          <div>
            <img src={Images.HomePagePictureThree} />
          </div>
          <div>
            <img src={Images.HomePagePictureFour} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
