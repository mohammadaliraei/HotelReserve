import React from "react";
import Header from "../Components/Header";
import HomePage from "./HomePage";
import Footer from "../Components/Footer";
import Advantages from "../Components/HomePage/Advantages";
import Ttest from "../Components/Ttest";

const Home = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-screen">
      <Header />
      <HomePage />
      {/* <Advantages />
      <Footer /> */}
    </div>
  );
};

export default Home;
