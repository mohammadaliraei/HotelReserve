import React, { useState } from "react";
import { Images } from "./Images";
import {
  faHouse,
  faNoteSticky,
  faPlaneUp,
  faUsers,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

const Nav = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const handelHumburger = () => {
    setIsVisible(!isVisible);
  };
  const Names = [
    { id: 1, name: "صفحه اصلی", link: "/", logo: faHouse },
    { id: 2, name: "بیمه مسافرتی", link: "/", logo: faNoteSticky },
    { id: 3, name: "سفرهای من", link: "/", logo: faPlaneUp },
    { id: 4, name: "درباره ما", link: "/", logo: faUsers },
    { id: 5, name: "پشتیبانی  021_4045 ", link: "/", logo: faPhone },
  ];
  return (
    <div
      className="flex w-full py-4"
      dir="rtl"
    >
      <div className="flex w-full px-14 items-center justify-between">
        <div>
          <img src={Images.logo} />
        </div>
        <div className="md:flex md:block hidden gap-6 font-bold">
          {Names.map((name) => (
            <button
              key={name.id}
              className="hover:text-Blue hover:border-Blue text-gray-800 font-Mikhak border-gray-400 border-b-2 py-2"
            >
              {name.name}
            </button>
          ))}
        </div>
        <div
          dir="rtl"
          className="md:flex hidden"
        >
          <button className="flex flex-row gap-3 text-center items-center bg-Blue text-white font-Mikhak py-2 px-4 rounded-md">
            <FontAwesomeIcon icon={faUser} />
            <h1>ورود / ثبت نام</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
