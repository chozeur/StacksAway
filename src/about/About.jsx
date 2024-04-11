import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoCheckCircle } from "react-icons/go";
import { useState, useEffect } from "react";

const NavbarMemo = React.memo(Navbar);
const FooterMemo = React.memo(Footer);

function About() {
  const [copied, setCopied] = useState(false);

  /* Noted in Notion */

  const copyToClipboard = () => {
    navigator.clipboard.writeText("souvikrajsingh@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000); // Change duration of the message display as needed

      return () => clearTimeout(timer);
    }
  }, [copied]);
  return (
    <>
      {/*  flex text-display text-h5 md:text-h2 max-w-[20ch] text-center text-accent mb-4 md:mb-0*/}

      {/* text-h6 md:text-h5 space-y-2 md:space-y-7 */}

      <NavbarMemo />
      <section className="grid grid-cols-1 md:grid-cols-2 font-cabinG text-light-gray p-4 md:p-12">
        <header className="font-extrabold p-4 text-5xl text-accent space-y-2 lg:flex md:space-y-0 lg:space-x-4 2xl:pl-16">
          <h1>About</h1>
          <h2 className=" text-light-gray">StacksAway</h2>
        </header>
        <article className="text-h6 2xl:text-2xl p-4 2xl:pr-32 space-y-5">
          <p>
            I created <strong>StacksAway</strong> to bridge the gap students
            face in finding tech opportunity in college. Starting from Student
            Programs, Mentorship Programs, Open Source Programs, or Fellowship
            Programs.
          </p>
          <p>
            I saw this video of a very talented YouTuber <strong>huyNG</strong>{" "}
            who created something similar for the frontend community. I was
            inspired by his work and decided to create something similar for the
            tech student community. The design is inspired by his work but I
            made some changes to it to make it more unique.
          </p>

          <div className="flex items-center gap-x-3 py-8">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src="./assets/profile.jpg"
                alt="Profile Picture"
                className="rounded-full w-100 h-100"
              />
            </div>
            <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
              <p className=" leading-tight">Souvik Raj Singh</p>
              <span
                className="leading-tight text-light-gray font-cabinG  cursor-pointer hover:underline relative"
                onClick={copyToClipboard}
              >
                souvikrajsingh02@gmail.com
                {copied && (
                  <span className="animate-pulse text-light-gray absolute right-[-15] mt-[-50px] text-xs ">
                    Copied to clipboard!{" "}
                    <GoCheckCircle className="fill-green-500 stroke-[0.2] " />
                  </span>
                )}
              </span>
            </div>
          </div>
        </article>
        <div className="flex justify-center items-center"></div>
      </section>

      <FooterMemo />
    </>
  );
}

export default About;
