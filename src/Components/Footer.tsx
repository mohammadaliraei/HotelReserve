import React from "react";
import { Images } from "./Images";
import LinksOfFooter from "./LinksOfFooter";
import FooterLogos from "./FooterLogos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handelClickUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center md:px-44  md:py-10 px-6 py-5 font-Mikhak ">
      <div className="flex md:flex-row flex-col-reverse gap-20 w-full">
        {/* this is logo and address */}
        <div className="flex md:flex-col flex-2 items-center">
          <div className="flex md:flex-row flex-col flex-1 gap-5 ">
            <button className="flex flex-row bg-[#11577A] items-center font-Sans font-bold text-white gap-4 justify-center rounded-sm w-36 h-12">
              <img
                src={Images.AppleStore}
                className="w-6 h-6"
              />
              <h1>Apple Store</h1>
            </button>
            <button className="flex flex-row bg-[#11577A] items-center font-Sans font-bold text-white gap-4 justify-center rounded-sm w-36 h-12">
              <img
                src={Images.PlayStoreIcon}
                className="w-6 h-6"
              />
              <h1>Play Store</h1>
            </button>
          </div>
          <div className="flex flex-1">
            {/*Links of the Footer*/}
            <LinksOfFooter />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <div className="md:flex hidden flex-col gap-2 text-right">
            <h1
              className=" font-bold text-lg"
              dir="rtl"
            >
              اپلیکیشن بیلیتو
            </h1>
            <h1 className="">
              بانصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته
              باشید
            </h1>
          </div>
          <div
            className="flex flex-col gap-3
            "
            dir="rtl"
          >
            <img
              src={Images.logo}
              className="w-24 h-12"
            />
            <h1>
              تلفن پشتیبانی:<span className="text-right">021_32547698</span>
            </h1>
            <h1>آدرس دفتر مرکزی: تهران میدان آزادی خیابان جیحون طوس غربی</h1>
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <FooterLogos />
      </div>
      <div className="flex flex-col items-center py-4 w-full">
        <button
          onClick={() => handelClickUp()}
          className="flex flex-col items-center gap-4"
        >
          <FontAwesomeIcon icon={faCircleArrowUp} />
          <h1>بازگشت به بالا</h1>
        </button>
      </div>
    </div>
  );
};

export default Footer;
