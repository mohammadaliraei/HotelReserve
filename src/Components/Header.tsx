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
import SearchBox from "../Components/SearchBox/SearchBox";
import Nav from "./Nav";

const Header = () => {
  
  return (
    <div className="flex flex-col w-screen">
      <Nav />
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
