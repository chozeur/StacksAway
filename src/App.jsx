import React from "react";
import Navbar from "./components/Navbar";
import Custombutton from "./components/Custombutton";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Sidenavigationbar from "./components/Sidenavigationbar";
import Card from "./components/Card/Card";
import Skeleton from "./components/Card/Skeleton.jsx";
import PlusIcon from "./components/Plusicon";
import getContent from "./utils/getContent.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CardDetail from "./components/Card/CardDetail.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // for contentful-cms
  const [content, setContent] = useState([]);
  const { getOpporunities } = getContent();

  useEffect(() => {
    setIsLoading(true);
    getOpporunities().then((response) => {
      setContent(response);
      setIsLoading(false);
    });
  }, []);

  const [selectedButton, setSelectedButton] = useState("All");
  const handleButtonClick = (text) => {
    if (selectedButton === text) {
      setSelectedButton("All");
    } else {
      setSelectedButton(text);
    }
  };

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[new Date().getMonth()];

  const [selectedMonths, setSelectedMonths] = useState(currentMonth);

  const programs = [
    "All",
    "Women",
    "Open Source Programs",
    "Student Programs",
    "Hackathons",
    "Mentorships",
  ];

  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        {/* hero section */}
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <h2 className="text-center text-accent mx-auto font-bold text-4xl max-w-[15ch] lg:max-w-[30ch] m-2   lg:text-4xl xl:text-5xl ">
            Curated Opportunities
            <span className="text-light-gray pl-2">for Students </span>
          </h2>
          <p className=" mx-auto text-lg text-center xl:text-h6 2xl:text-h5 max-w-[30ch] lg:max-w-[60ch]">
            Explore handpicked opportunities tailored to enhance your tech
            experience.
          </p>
        </section>

        {/* Custom button Navigation  */}
        <section>
          <div className="sticky top-6 z-50 bottom-0 left-0 right-0 bg-bg p-4 flex flex-col sm:flex-row justify-center gap-x-2 gap-y-2 sm:hidden">
            <button
              className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between text-accent"
              onClick={() => setIsButtonClicked(!isButtonClicked)}
            >
              All
              <span>
                <PlusIcon />
              </span>
            </button>
            {isButtonClicked &&
              programs.map((program) => (
                <Custombutton
                  key={program}
                  text={program}
                  count={
                    program === "All"
                      ? content.length
                      : content.filter((item) => item.program === program)
                          .length
                  }
                  isSelected={selectedButton === program}
                  onClick={() => handleButtonClick(program)}
                />
              ))}
          </div>
          <div className=" sticky top-0 z-50  mb-8 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex ">
            <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15 ">
              {programs.map((program) => (
                <Custombutton
                  key={program}
                  text={program}
                  count={
                    program === "All"
                      ? content.length
                      : content.filter((item) => item.program === program)
                          .length
                  }
                  isSelected={selectedButton === program}
                  onClick={() => handleButtonClick(program)}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col 2xl:mr-12 md:grid md:grid-cols-3 gap-2 ">
          <div className="order-1 md:order-2">
            <Sidenavigationbar
              selectedMonths={selectedMonths}
              setSelectedMonths={setSelectedMonths}
            />
          </div>
          <div className="order-1 md:order-2 col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 px-14 md:pl-0 md:pr-14 md:ml-[-80px] 2xl:ml-[-120px]">
            {isLoading ? (
              <Skeleton />
            ) : (
              content
                .filter(
                  (card) =>
                    (selectedButton === "All" ||
                      card.program === selectedButton) &&
                    (selectedMonths.length === 0 ||
                      selectedMonths.includes(card.month))
                )
                .map((card, index) => (
                  <div key={index}>
                    <Link
                      to={{
                        pathname: `programs/${card.slug}`,
                        state: { month: card.month, title: card.title },
                      }}
                    >
                      <Card
                        month={card.month}
                        title={card.title}
                        program={card.program}
                        picUrl={card.image ? `https:${card.image}` : ""}
                      />
                    </Link>
                  </div>
                ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
