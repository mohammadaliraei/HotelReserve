import React from "react";
import { Images } from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-[108px] items-center gap-4 h-[104px] w-full bg-white">
        <div className="flex items-center">
          <button className="font-Mikhak flex items-center gap-2 text-white rounded-md px-4 py-2 bg-Blue">
            ورود / ثبت نام
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <div className="flex flex-row gap-2 text-center items-center justify-center">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-4 h-4"
          />
          <h1 className="font-Mikhak">پشتیبانی</h1>
          <h1 className="font-Mikhak">021_4045</h1>
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <img
            src={Images.logo}
            className="w-[148px] h-[48px] text-center "
          />
        </div>
      </div>
      <div>
        <img src={Images.HomePic} />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Header;
