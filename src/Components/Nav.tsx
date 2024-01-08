import React, { useState } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-row gap-6 font-Mikhak">
      <button
        className="flex flex-row items-center gap-2"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-4 h-4"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="w-4 h-4"
          />
        )}
        سایر موارد
      </button>
      <button>سفرهای من</button>
      <button>بیمه مسافرتی</button>
      <button>صفحه اصلی</button>
    </div>
  );
};

export default Nav;
