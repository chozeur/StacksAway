import React from "react";
import Navbar from "./components/Navbar";
import Custombutton from "./components/Custombutton";
import { useState } from "react";
import Footer from "./components/Footer";
import Sidenavigationbar from "./components/Sidenavigationbar";
import Card from "./components/Card/Card";
import PlusIcon from "./components/Plusicon";
import cardData from "./components/cardData.js";

export default function App() {
  const [selectedButton, setSelectedButton] = useState("All");
  const handleButtonClick = (text) => {
    if (selectedButton === text) {
      setSelectedButton("All");
    } else {
      setSelectedButton(text);
    }
  };

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

  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        {/* hero section */}
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-32">
          <h2 className="text-display text-h2 max-w-[20ch] text-center text-accent">
            Curated Opportunities
            <span className="text-light-gray pl-2">for students :| </span>
          </h2>
          <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
            Explore curated and handpicked opportunities that enhance your
            experience in tech.
          </p>
        </section>

        {/* Custom button Navigation  */}
        <section>
          <div className="fixed bottom-0 left-0 right-0 bg-bg p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50 ">
            <button className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between  text-accent">
              All
              <span>
                <PlusIcon />
              </span>
            </button>
          </div>

          <div className="mb-8  z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
            <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
              <Custombutton
                text="All"
                isSelected={selectedButton === "All"}
                onClick={() => setSelectedButton("All")}
              />

              <Custombutton
                text="Open Source Programs"
                count={
                  cardData.filter(
                    (card) => card.program === "Open Source Programs"
                  ).length
                }
                isSelected={selectedButton === "Open Source Programs"}
                onClick={() => handleButtonClick("Open Source Programs")}
              />
              <Custombutton
                text="Hackathons"
                count={
                  cardData.filter((card) => card.program === "Hackathons")
                    .length
                }
                isSelected={selectedButton === "Hackathons"}
                onClick={() => handleButtonClick("Hackathons")}
              />
              <Custombutton
                text="Student Programs"
                count={
                  cardData.filter((card) => card.program === "Student Programs")
                    .length
                }
                isSelected={selectedButton === "Student Programs"}
                onClick={() => handleButtonClick("Student Programs")}
              />
              <Custombutton
                text="Fellowship"
                count={
                  cardData.filter((card) => card.program === "Fellowship")
                    .length
                }
                isSelected={selectedButton === "Fellowship"}
                onClick={() => handleButtonClick("Fellowship")}
              />
              <Custombutton
                text="Women"
                count={
                  cardData.filter((card) => card.program === "Women").length
                }
                isSelected={selectedButton === "Women"}
                onClick={() => handleButtonClick("Women")}
              />
              <Custombutton
                text="Mentorships"
                count={
                  cardData.filter((card) => card.program === "Mentorships")
                    .length
                }
                isSelected={selectedButton === "Mentorships"}
                onClick={() => handleButtonClick("Mentorships")}
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <Sidenavigationbar
              selectedMonths={selectedMonths}
              setSelectedMonths={setSelectedMonths}
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6  gap-y-6  pr-14 ml-[-80px]">
            {cardData
              .filter(
                (card) =>
                  (selectedButton === "All" ||
                    card.program === selectedButton) &&
                  (selectedMonths.length === 0 ||
                    selectedMonths.includes(card.month))
              )
              .map((card, index) => (
                <div key={index}>
                  <Card
                    month={card.month}
                    title={card.title}
                    program={card.program}
                    picUrl={card.picUrl}
                  />
                </div>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
