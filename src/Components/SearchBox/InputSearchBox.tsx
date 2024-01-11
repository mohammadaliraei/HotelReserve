import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAdults,
  decrementChildren,
  decrementInfants,
  incrementAdults,
  incrementChildren,
  incrementInfants,
} from "../../features/Passenger";

const InputSearchBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const adults = useSelector((state: any) => state.passenger.adults);
  const children = useSelector((state: any) => state.passenger.children);
  const infants = useSelector((state: any) => state.passenger.infants);
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <input
        placeholder="تعداد مسافر"
        className="h-[48px]  text-end rounded-md px-6 border-2 placeholder-black font-Mikhak"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="flex w-full ">
        {isOpen && (
          <div className="absolute flex flex-col gap-4 mt-3 border-gray-200 border-[1px] bg-white justify-center rounded-md px-2 py-4 ">
            <div className="flex flex-row gap-2">
              <button onClick={() => dispatch(incrementAdults())}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white bg-Blue p-1 rounded-md"
                />
              </button>
              <h1 className="">{adults}</h1>
              <button onClick={() => dispatch(decrementAdults())}>
                <FontAwesomeIcon
                  icon={faMinus}
                  className="text-white bg-Blue p-1 rounded-md"
                />
              </button>
              <div className="flex justify-end w-full">
                <h1
                  className="font-Mikhak"
                  lang="fa"
                >
                  بزرگسال{" "}
                  <span className="text-gray-600">(12 سال به بالا)</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <button onClick={() => dispatch(incrementChildren())}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white bg-Blue p-1 rounded-md"
                />
              </button>
              <h1>{children}</h1>
              <button onClick={() => dispatch(decrementChildren())}>
                <FontAwesomeIcon
                  icon={faMinus}
                  className="text-white bg-Blue p-1 rounded-md"
                />
              </button>
              <div className="flex justify-end w-full">
                <h1
                  className="font-Mikhak"
                  lang="fa"
                >
                  کودک <span className="text-gray-600">(2 تا 12 سال)</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <button onClick={() => dispatch(incrementInfants())}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white bg-Blue p-1 rounded-md"
                />
              </button>
              <h1>{infants}</h1>
              <button onClick={() => dispatch(decrementInfants())}>
                <FontAwesomeIcon
                  icon={faMinus}
                  className="text-white bg-Blue p-1 rounded-md"
                />
              </button>
              <div className="flex justify-end w-full">
                <h1
                  className="font-Mikhak"
                  lang="fa"
                >
                  نوزاد <span className="text-gray-600">(10 روز تا 2 سال)</span>
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSearchBox;
