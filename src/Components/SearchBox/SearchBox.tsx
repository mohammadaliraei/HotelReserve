import React, { useEffect, useState } from "react";
import {
  faPlaneUp,
  faRightLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputSearchBox from "./InputSearchBox";

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
  const [values, setValues] = useState<any>([
    new DateObject({ calendar: persian }).subtract(0, "days"),
    new DateObject({ calendar: persian }).add(0, "days"),
  ]);

  const handelButtonClick = (button: string) => {
    setActiveButton(button);
  };

  useEffect(() => {
    console.log(values.day);
  });

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
    <div className="flex flex-col  bg-white  mx-screen h-[230px] font rounded-md shadow-lg ">
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
        <div className="flex flex-1 justify-end gap-4 items-center py-4">
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
        <div className=" flex  items-center gap-2 relative">
          <div>
            <button className="flex bg-Blue w-[160px] h-[48px] gap-4 justify-center items-center  rounded-md text-white font-Mikhak">
              جستجو
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div>
            <InputSearchBox />
          </div>
          <div style={{ direction: "rtl" }}>
            <DatePicker
              style={{
                fontFamily: "Mikhak",
                display: "flex",
                textAlign: "center",

                height: "48px",
              }}
              placeholder="تاریخ رفت"
              className="font-Mikhak "
              dateSeparator="  تا  "
              value={values}
              onChange={setValues}
              range
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
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
        </div>
      </div>
    </div>
  );
};

export default FastSearch;
