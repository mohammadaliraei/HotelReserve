import React, { useState } from "react";
import { faPlaneUp, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Test from "../Test";
import YourComponent from "../Test";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const ToggleButton = ({ onClick, isActive, label }: any) => (
  <button
    className={`border-2 w-[120px] h-[40px] font-Mikhak rounded-md justify-center text-center ${
      isActive ? " text-white bg-Blue border-Blue" : "border-Blue"
    } `}
    onClick={onClick}
  >
    {label}
  </button>
);

const FastSearch = () => {
  const [toggle, setToggle] = useState<any>(true);
  const [activeButton, setActiveButton] = useState<any>(null);
  const [activeCalender, setActiveCalender] = useState(true);

  const handelButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const handelInput = () => {
    setActiveButton(!activeCalender);
    console.log(activeCalender);
  };

  const dataCity = [
    "تهران",
    "اهواز",
    "شیراز",
    "مشهد",
    "بندرعباس",
    "تبریز",
    "کیش",
  ];

  return (
    <div className="flex flex-col  bg-white  mx-[107px] h-[230px] font rounded-md">
      <div className="flex flex-col gap-3 w-full h-full p-[25px]">
        <div className="flex flex-1 flex-row gap-5 justify-end  border-b-2 border-gray-200">
          <button
            className={`flex gap-2 items-center pb-3  border-b-[2px]  justify-center text-Gray ${
              toggle ? "text-Blue border-Blue" : "text-Gray "
            } `}
            onClick={() => setToggle(!toggle)}
          >
            <h1 className={`font-bold ${toggle ? "text-Blue" : "text-Gray"}`}>
              پرواز خارجی
            </h1>
            <FontAwesomeIcon
              icon={faPlaneUp}
              className={`${toggle ? "text-Blue" : "text-Gray"}`}
            />
          </button>
          <button
            className={`flex gap-2 items-center pb-3  border-b-[2px]  justify-center text-Gray ${
              !toggle ? "text-Blue border-Blue" : "text-Gray"
            } `}
            onClick={() => setToggle(!toggle)}
          >
            <h1 className={`font-bold ${!toggle ? "text-Blue" : "text-Gray"}`}>
              پرواز داخلی
            </h1>

            <FontAwesomeIcon
              icon={faPlaneUp}
              className={`${!toggle ? "text-Blue" : "text-Gray"}`}
            />
          </button>
        </div>
        <div className="flex flex-1 justify-end gap-12 items-center py-4">
          <ToggleButton
            onClick={() => handelButtonClick("button1")}
            isActive={activeButton === "button1"}
            label={"چندمسیره"}
          />
          <ToggleButton
            onClick={() => handelButtonClick("button2")}
            isActive={activeButton === "button2"}
            label={"رفت و برگشت"}
          />
          <ToggleButton
            label={"رفت"}
            onClick={() => handelButtonClick("button3")}
            isActive={activeButton === "button3"}
          />
        </div>
        <div className="bg-red-300 flex items-center">
          <div>
            <input
              onChange={() => handelInput()}
              className="border-2 text-end px-6  rounded-md w-[180px] h-[48px]"
            />
            <div className="flex absolute">
              {
                <Calendar
                  calendar={persian}
                  locale={persian_fa}
                />
              }
            </div>
          </div>
          <div className="flex flex-1 font-Mikhak">
            <div className="flex flex-1  justify-end text-center items-center gap-3 ">
              <input
                list="city"
                className="border-2 text-end px-6  rounded-md w-[180px] h-[48px]"
                placeholder="مقصد"
              />
              <FontAwesomeIcon icon={faRightLeft} />
              <input
                list="city"
                className="border-2 text-end px-6  rounded-md w-[180px] h-[48px]"
                placeholder="مبدا"
              />
              <datalist id="city">
                {dataCity.map((city) => (
                  <option>{city}</option>
                ))}
              </datalist>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FastSearch;
