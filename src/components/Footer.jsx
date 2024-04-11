import React from "react";
import FooterLarge from "./FooterLarge";
import { GoArrowUpRight } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";

/*  
    Define a Link Component that takes href and children as props.
    This component is used to create a link with an arrow icon that animates on hover.
  */

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

const Footer = () => {
  return (
    <footer className="mx-4">
      <div className="border-b border-b-gray pb-6 mt-8"></div>
      <div className="mt-4 mb-10">
        <FooterLarge className="w-1/5" />
      </div>
      <div className="mb-8 md:space-y-4 flex flex-col lg:flex-row justify-between items-start lg:items-center ">
        <div className="text-left space-y-2  font-cabinG text-sm md:text-xl">
          <p>
            Made and Curated by <strong>SRS</strong>
          </p>
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} StacksAway All rights reserved.
          </p>
        </div>
        <div className="flex flex-col  space-y-0 sm:flex-row gap-1 sm:gap-6">
          <div className="flex justify-between items-center gap-4 mt-5 md:mt-2 font-cabinG text-base md:text-base">
            <div className="flex flex-col">
              <Link to="/about">About</Link>
              <Link href="https://forms.gle/qDE1JXUK2w9Nhh7v6">
                Add a Resource
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 font-cabinG text-base md:text-base">
            <div className="flex flex-col">
              <Link href="#form-link">Drop a Feedback</Link>
              <Link href="https://github.com/souvikrajsingh/Stacksaway">
                Contribute on Github
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 font-cabinG text-base md:text-base">
            <div className="flex flex-col">
              <Link href="mailto:souvikrajsingh02@gmail.com">Email me</Link>
              <Link href="https://twitter.com/souviktwts">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
