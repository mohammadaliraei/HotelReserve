import React, { useState } from "react";
import { Images } from "./Images";
import {
  faHouse,
  faNoteSticky,
  faPlaneUp,
  faUsers,
  faPhone,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { useDispatch, useSelector } from "react-redux";
import { ChangeSearchBar } from "../features/Passenger";
import { RootState } from "@reduxjs/toolkit/query";

interface names {
  id: number;
  name: string;
  link: string;
  logo: any;
}

const Nav: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  // const isVisibleNav = useSelector((state,action)=>)
  const handelHumburger = () => {
    dispatch(ChangeSearchBar(!isVisible));
    console.log();
  };
  const dispatch = useDispatch();
  const Names: names[] = [
    { id: 1, name: "صفحه اصلی", link: "/", logo: faHouse },
    { id: 2, name: "بیمه مسافرتی", link: "/", logo: faNoteSticky },
    { id: 3, name: "سفرهای من", link: "/", logo: faPlaneUp },
    { id: 4, name: "درباره ما", link: "/", logo: faUsers },
    { id: 5, name: "پشتیبانی  021_4045 ", link: "/", logo: faPhone },
  ];

  return (
    <div
      className="md:flex w-full py-4"
      dir="rtl"
    >
      <div className="flex w-full px-8 md:px-14 items-center justify-between">
        <button onClick={() => handelHumburger()}>
          {isVisible ? (
            <FontAwesomeIcon
              icon={faClose}
              className="md:hidden"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="md:hidden"
            />
          )}
        </button>
        <div>
          <img
            src={Images.logo}
            className="w-24 md:w-[70%]"
          />
        </div>
        <FontAwesomeIcon
          icon={faUser}
          className="md:hidden"
        />

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
      {isVisible && (
        <div className="flex flex-col gap-12 py-20  w-full h-screen font-Mikhak text-base">
          {Names.map((name) => (
            <div className="flex px-10 gap-2 items-center">
              <button
                key={name.id}
                className="flex items-center gap-3 text-base hover:text-Blue text-black"
              >
                <FontAwesomeIcon icon={name.logo} />
                {name.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
