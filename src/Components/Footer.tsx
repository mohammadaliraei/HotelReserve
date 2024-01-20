import React from "react";
import { Images } from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handelScrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-row-reverse justify-between py-8 px-[107px] border-b-[1px] border-gray-200">
        <div
          className="flex flex-col text-end font-Mikhak gap-2"
          lang="fa"
        >
          <div>
            <h1 className="font-bold ">اپلیکیشن بیلیتو</h1>
          </div>
          <div>
            <h1>
              با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما را داشته
              باشید
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row">
            <button className="flex flex-row w-[150px] h-[50px] rounded-sm gap-2 text-white font-bold justify-center items-center text-center bg-[#11577A]">
              <img
                src={Images.AppleStore}
                className="w-6 h-6 "
              />
              <h1>Play Store</h1>
            </button>
          </div>
          <div>
            <button className="flex flex-row w-[150px] h-[50px] rounded-sm gap-2 text-white font-bold justify-center items-center text-center bg-[#11577A]">
              <img
                src={Images.PlayStoreIcon}
                className="w-5 h-5"
              />
              <h1>Apple Store</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse px-[107px] text-end justify-end ">
        <div className="flex flex-col gap-5 pt-8 flex-1 font-Mikhak  ">
          <div className="flex  justify-end w-full ">
            <img
              src={Images.logo}
              className="w-[138px] h-[38px]"
            />
          </div>
          <div className="flex justify-end">
            <h1
              lang="fa"
              dir="rtl"
            >
              تلفن پشتیبانی: 021_32 54 76 98
            </h1>
          </div>
          <div className="flex justify-end">
            <h1 dir="rtl">
              آدرس دفترمرکزی: تهران -میدان آزادی - خیابان جیحون - طوسی غربی.
            </h1>
          </div>
        </div>
        <div
          className="flex flex-col pl-56 font-Mikhak pt-8"
          dir="ltr"
        >
          <h1 className="pb-4">لینک های مفید بیلیتو</h1>
          <ul className="text-gray-800 leading-7">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>استرداد بیلیط</li>
            <li>راهنمایی خرید بلیط</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row-reverse border-b-[1px] my-5">
        <div className="flex flex-col flex-1 justify-center items-center gap-4 py-6">
          <div>
            <img
              src={Images.SocialMedia}
              className="w-52 "
            />
          </div>
          <div>
            <h1>MDRaei@gmail.com</h1>
          </div>
        </div>
        <div className="flex flex-1 py-6 items-center justify-center">
          <img
            src={Images.FooterSymbol}
            className="w-60"
          />
        </div>
      </div>
      <div className="flex flex-col items-center font-Mikhak gap-2 py-6 justify-center  px-4">
        <button onClick={() => handelScrollToUp()}>
          <FontAwesomeIcon icon={faSortUp} />
          <h1>بازگشت به بالا</h1>
        </button>
      </div>
    </div>
  );
};

export default Footer;
