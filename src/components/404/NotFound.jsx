import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../Buttons";
import NotFoundSvg from "../NotFoundSvg";
import { GoArrowUpRight } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ href, to, children }) => (
  <div className="group relative flex pb-2">
    {to ? (
      <RouterLink to={to}>{children}</RouterLink>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )}
    <span className="relative overflow-hidden h-fit w-fit">
      <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
      <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
    </span>
  </div>
);

const links = [
  { to: "/about", text: "About" },
  { href: "#form-link", text: "Drop a Feedback" },
  { href: "https://twitter.com/souviktwts", text: "Twitter" },
];

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-center  h-screen px-5 md:px-10 lg:px-20 xl:px-40 2xl:px-52 mt-5 sm:mt-10 md:mt-20 lg:mt-32 xl:mt-40 2xl:mt-52">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-5">
          <h1 className="text-center  font-cabinG bg-bg text-light-gray font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Opps! We couldn't find that page :{"("}
          </h1>
          <div className="flex flex-row gap-2  font-cabinG text-xs md:text-base ">
            {links.map((link, index) => (
              <div key={index} className="flex justify-between items-center">
                {link.to ? (
                  <Link to={link.to}>{link.text}</Link>
                ) : (
                  <Link href={link.href}>{link.text}</Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-center font-cabinG text-sm md:text-base lg:text-2xl">
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
        <div className="w-1/2 justify-center items-center ml-16 mt-6 md:justify-center md:w-1/3 2xl:w-1/3">
          <NotFoundSvg />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
