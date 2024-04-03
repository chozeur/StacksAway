import React from "react";
import FooterLarge from "./FooterLarge";
import { GoArrowUpRight } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";
const Footer = () => {
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

  return (
    <footer className="mx-4">
      <div className="border-b border-b-gray pb-6 mt-8"></div>
      <div className="mt-4 mb-64">
        <FooterLarge className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3" />
      </div>

      <div className="flex justify-between items-center gap-4 my-5 font-cabinG text-base">
        <div className="flex flex-col">
          <Link to="/about">About</Link>
          <Link href="https://forms.gle/qDE1JXUK2w9Nhh7v6">Add a Resource</Link>
          <Link href="#form-link">Drop a Feedback</Link>
          <Link href="https://github.com/souvikrajsingh/Stacksaway">
            Contribute on Github
          </Link>
          <Link href="mailto:souvikrajsingh02@gmail.com">Email me</Link>
          <Link href="https://twitter.com/souviktwts">Twitter</Link>
        </div>

        <div className="text-xs text-gray-500">
          <div></div>
          <div>
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Made &amp; Curated by &nbsp;
            </span>
            <a
              className="font-bold  group  "
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/souviktwts"
            >
              <span>srs;|</span>
            </a>
          </div>
          © 2024 <span className="font-bold ">STACKSAWAY</span> All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
