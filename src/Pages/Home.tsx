import React from "react";
import Header from "../Components/Header";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen">
      <Header />
      <HomePage />
    </div>
  );
};

export default Home;
