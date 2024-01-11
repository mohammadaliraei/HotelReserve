import React, { useState } from "react";
import { Images } from "./assets/Images";

const Test = () => {
  const [cityName, SetCityName] = useState<string>("");

  const handelCityBtn = (name: string) => {
    SetCityName(name);
  };
  return (
    <div className="flex gap-3 pt-[200px]">
      <button>hello</button>
      <button>hello1</button>
      <button>hello2</button>
      <button>hello3</button>
    </div>
  );
};

export default Test;
