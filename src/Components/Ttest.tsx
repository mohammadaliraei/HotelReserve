import React, { useState } from "react";

const Ttest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Your Logo</div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            Menu
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex items-center">
            <li className="mb-4 lg:mb-0">
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li className="mb-4 lg:mb-0">
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li className="mb-4 lg:mb-0">
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Ttest;
