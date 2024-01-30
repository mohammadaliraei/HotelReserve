import React from "react";
import { Images } from "../Components/Images";
import QuestionHomePage from "../Components/HomePage/QuestionHomePage";

const HomePage = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-col mt-4 md:mt-36"
    >
      <div className="md:flex flex-col hidden w-full  max-w-6xl mx-auto">
        <div className="flex flex-row gap-4 justify-between items-center ">
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
          <div className="flex md:flex-col space-y-4">
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
      <div className="md:hidden flex overflow-x-scroll snap-x snap-mandatory gap-1 pb-4 px-5">
        <div className="flex-none snap-center w-56 h-36 ">
          <img
            src={Images.HomePagePictureOne}
            className="flex w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-none snap-center w-56 h-36 ">
          <img
            src={Images.HomePagePictureTwo}
            className="flex w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-none snap-center w-56 h-36 ">
          <img
            src={Images.HomePagePictureThree}
            className="flex w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-none snap-center w-56 h-36 ">
          <img
            src={Images.HomePagePictureFour}
            className="flex w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div>
        <QuestionHomePage />
      </div>
    </div>
  );
};

export default HomePage;
