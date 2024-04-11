import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../Buttons";
import NotFoundSvg from "../NotFoundSvg";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center h-screen px-5 md:px-10 lg:px-20 xl:px-40 2xl:px-52 mt-5 sm:mt-10 md:mt-20 lg:mt-32 xl:mt-40 2xl:mt-52">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-5">
          <h1 className="text-center bg-bg text-light-gray font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            404 - Opps! We couldn't find that page
          </h1>
          <p className="text-center sm:text-lg md:text-xl lg:text-2xl">
            Maybe you find what you're looking for in our homepage
          </p>
          <Button
            href="/"
            text="Go Home"
            className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base md:text-lg lg:text-xl"
          >
            Go Home
          </Button>
        </div>
        <div className="w-1/2 mt-10 md:w-1/2">
          <NotFoundSvg />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
