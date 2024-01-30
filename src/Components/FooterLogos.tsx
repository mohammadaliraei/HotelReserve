import React from "react";
import { Images } from "./Images";

const FooterLogos = () => {
  return (
    <div className="flex md:flex-row justify-between flex-col gap-6 w-full py-5">
      <div className="flex flex-1 justify-center ">
        <img
          src={Images.FooterSymbol}
          className="w-52"
        />
      </div>
      <div className="flex flex-col items-center flex-1 gap-3">
        <img
          src={Images.SocialMedia}
          className="w-52"
        />
        <h1 className="font-Sans text-Blue">@MDRaei-MDRaei2024</h1>
      </div>
    </div>
  );
};

export default FooterLogos;
