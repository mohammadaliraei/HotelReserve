import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeSearchBar } from "../../features/Passenger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import InputSearchBox from "./InputSearchBox";

const SearchBoxMobile = () => {
  const [values, setValues] = useState<any>([
    new DateObject({ calendar: persian }).subtract(0, "days"),
    new DateObject({ calendar: persian }).add(0, "days"),
  ]);
  const [isInputOrigin, setIsInputOrigin] = useState<string>("");
  const [isInputDes, setIsInputDes] = useState<string>("");
  const [isOpenOrigin, setIsOpenOrigin] = useState<boolean>(false);
  const [isOpenDes, setIsOpenDes] = useState<boolean>(false);
  const visibleReverseBtn = useSelector(
    (state: any) => state.passenger.valueReserve
  );
  const dispatch = useDispatch();
  const handelClick = (button: string) => {
    dispatch(ChangeSearchBar(button));
  };
  const handelToggleOrigin = () => {
    setIsOpenOrigin(!isOpenOrigin);
    console.log(isOpenOrigin);
  };
  const handelToggleDes = () => {
    setIsOpenDes(!isOpenDes);
    console.log(isOpenDes);
  };
  const handelSelectOrigin = (name: string) => {
    setIsInputOrigin(name);
    setIsOpenOrigin(false);
    console.log(name);
  };
  const handelSelectDes = (name: string) => {
    setIsInputDes(name);
    setIsOpenDes(false);
  };
  const dataCity = [
    { id: 1, name: "تهران" },
    { id: 1, name: "اصفهان" },
    { id: 2, name: "اهواز" },
    { id: 3, name: "شیراز" },
    { id: 4, name: "مشهد" },
    { id: 5, name: "بندرعباس" },
    { id: 6, name: "تبریز" },
    { id: 7, name: "کیش" },
  ];
  return (
    <div
      className="flex   w-full pt-8 pb-4"
      dir="rtl"
    >
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full  items-start justify-between">
          <div className="flex flex-1">
            <button className="font-Mikhak border-gray-500 border-b-[1px] hover:text-Blue hover:border-Blue hover:border-b-2 p-4 w-[100%]">
              پرواز خارجی
            </button>
          </div>
          <div className="flex flex-1">
            <button className="font-Mikhak border-gray-500 border-b-[1px] hover:text-Blue hover:border-Blue hover:border-b-2 p-4 w-[100%]">
              پرواز داخلی
            </button>
          </div>
        </div>
        <div className="flex  justify-between font-Mikhak">
          <button
            className={`flex justify-center items-center border-[1px] border-Blue w-[100px] h-[40px] rounded-md  
            ${
              visibleReverseBtn === "button1"
                ? " text-white bg-Blue border-Blue"
                : "border-Blue"
            }`}
            onClick={() => handelClick("button1")}
          >
            <h1>رفت</h1>
          </button>
          <button
            className={`flex justify-center items-center border-[1px] border-Blue w-[100px] h-[40px] rounded-md  
            ${
              visibleReverseBtn === "button2"
                ? " text-white bg-Blue border-Blue"
                : "border-Blue"
            }`}
            onClick={() => handelClick("button2")}
          >
            <h1>رفت و برگشت</h1>
          </button>
          <button
            className={`flex justify-center items-center border-[1px] border-Blue w-[100px] h-[40px] rounded-md  
            ${
              visibleReverseBtn === "button3"
                ? " text-white bg-Blue border-Blue"
                : "border-Blue"
            }`}
            onClick={() => handelClick("button3")}
          >
            <h1>چند مسیره</h1>
          </button>
        </div>
        <div className="font-Mikhak">
          <div className="flex justify-between items-center border-2 w-full py-2 px-4 text-black rounded-md">
            <input
              placeholder="مبدا"
              className=""
              onClick={handelToggleOrigin}
              value={isInputOrigin}
            />

            <FontAwesomeIcon
              icon={isOpenOrigin ? faChevronUp : faChevronDown}
            />
          </div>
          {isOpenOrigin && (
            <div className="flex bg-white border-2 px-4 py-2 my-1 rounded-md">
              <ul className="flex flex-col gap-2">
                {dataCity.map((names) => (
                  <li
                    onClick={() => handelSelectOrigin(names.name)}
                    key={names.id}
                  >
                    {names.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col font-Mikhak  ">
          <div className="flex  justify-between items-center border-2 w-full py-2 px-4 text-black rounded-md">
            <input
              placeholder="مقصد"
              className=""
              onClick={handelToggleDes}
              value={isInputDes}
            />

            <FontAwesomeIcon icon={isOpenDes ? faChevronUp : faChevronDown} />
          </div>
          {isOpenDes && (
            <div className="flex z-10 w-full bg-white border-2 px-4 py-2 my-1 rounded-md">
              <ul className="flex flex-col gap-2">
                {dataCity.map((names) => (
                  <li
                    onClick={() => handelSelectDes(names.name)}
                    key={names.id}
                  >
                    {names.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className="flex  w-full "
          style={{ direction: "rtl" }}
        >
          <DatePicker
            style={{
              width: "165%",
              fontFamily: "Mikhak",
              display: "flex",
              textAlign: "center",
              height: "48px",
            }}
            placeholder="تاریخ رفت"
            className="font-Mikhak rmdp-mobile flex "
            dateSeparator="  تا  "
            value={values}
            onChange={setValues}
            range
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </div>
        <div className="flex w-full ">
          <InputSearchBox />
        </div>
        <div className="flex ">
          <button className="flex bg-Blue w-full h-[48px] gap-2 justify-center items-center  rounded-md text-white font-Mikhak">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBoxMobile;
