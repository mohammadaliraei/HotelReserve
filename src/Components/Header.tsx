import React, { useState } from "react";
import { Images } from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faBars,
  faHouse,
  faNoteSticky,
  faPlaneUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import SearchBox from "../Components/SearchBox/SearchBox";

const Header = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const handelHumburger = () => {
    setIsVisible(!isVisible);
  };
  const Links = [
    { name: "صفحه اصلی", link: "/", logo: faHouse },
    { name: "بیمه مسافرتی", link: "/", logo: faNoteSticky },
    { name: "سفرهای من", link: "/", logo: faPlaneUp },
    { name: "درباره ما", link: "/", logo: faUsers },
    { name: "پشتیبانی  021_4045 ", link: "/", logo: faPhone },
  ];
  return (
    <div className="">
      <div className="flex md:flex-row md:px-[108px] justify-between items-center gap-4 h-[104px] w-full bg-white ">
        <div className="flex items-center ">
          <button className="font-Mikhak flex items-center gap-2 text-white rounded-md px-4 py-2 bg-Blue">
            ورود / ثبت نام
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <div
          className="flex flex-col md:flex-row gap-6 font-Mikhak text-lg"
          dir="rtl"
        >
          {Links.map((link) => (
            <div className="flex flex-col md:flex-row">
              <div
                key={link.link}
                className="flex "
              >
                <FontAwesomeIcon
                  icon={link.logo}
                  className="md:hidden"
                />
                {link.name}
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src={Images.logo}
            className="w-[148px] h-[48px] text-center "
          />
        </div>
        <button
          className="md:hidden"
          onClick={() => handelHumburger()}
        >
          <FontAwesomeIcon
            icon={faBars}
            className=" w-[24px] h-[24px]"
          />
        </button>
      </div>
      <div className="flex">
        <div className="flex relative">
          <img
            src={Images.HomePic}
            className="w-screen"
          />
          <div className="flex absolute w-full top-[70%] justify-center items-center">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
