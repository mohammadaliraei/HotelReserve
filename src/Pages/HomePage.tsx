import React from "react";
import { Images } from "../Components/Images";

const HomePage = () => {
  return (
    <div
      className="flex flex-col w-full h-screen mt-40 max-w-6xl mx-auto"
      dir="rtl"
    >
      <div className="flex flex-row gap-4 justify-between items-center">
        <div>
          <button>
            <img src={Images.HomePagePictureOne} />
          </button>
        </div>
        <div>
          <button>
            <img src={Images.HomePagePictureTwo} />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="">
            <button>
              <img src={Images.HomePagePictureThree} />
            </button>
          </div>
          <div className="">
            <button>
              <img src={Images.HomePagePictureFour} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
