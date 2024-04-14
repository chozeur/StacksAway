import React, { useState, useEffect } from "react";
import PlusIcon from "./Plusicon";

const Sidenavigationbar = ({ selectedMonths, setSelectedMonths }) => {
  const handleMonthClick = (month) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const months = [
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

	const [selectAll, setSelectAll] = useState(false);
	const toggleSelectAll = () => {
		if (selectAll) {
			setSelectedMonths([]);
		} else {
			setSelectedMonths(months);
		}
		setSelectAll(!selectAll);
	};

	useEffect(() => {
		if (selectedMonths.length === months.length) {
			setSelectAll(true);
		} else {
			setSelectAll(false);
		}
	}, [selectedMonths]);

  return (
    <>
      <div className="sticky top-6 z-50  p-4 flex gap-x-2 gap-y-2 sm:block md:hidden">
        <button
          className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <h2>Months</h2>
          <PlusIcon />
        </button>
        {isMenuOpen && (
          <div className="left-0 w-full border-b-2 p-6 border-b-dim-gray bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
            {months.map((month) => (
              <label key={month} className="p-2 flex items-center">
                <input
                  type="checkbox"
                  id={month}
                  name={month}
                  checked={selectedMonths.includes(month)}
                  onChange={() => handleMonthClick(month)}
                  className="transition duration-200 ease-in-out hover:opacity-50"
                />
                <span className="pl-2">{month}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="pl-8 md:pl-3 lg:pl-10 2xl:pl-32 font-bold text-lg text-light-gray sticky top-4 hidden md:block ">
        <div className="left-0 w-64 md:w-44 lg:w-64 2xl:w-80  2xl:h-[750px] border-b-2 p-6 border-b-dim-gray bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
          <h2 className="text-center text-xl lg:text-2xl font-bold ">Months</h2>
					<button
            onClick={toggleSelectAll}
            className="w-full py-2 px-4 mt-4 mb-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {selectAll ? "Unselect All" : "Select All"}
          </button>
          {months.map((month) => (
            <label key={month} className="p-2 2xl:p-3 flex ">
              <input
                type="checkbox"
                id={month}
                name={month}
                checked={selectedMonths.includes(month)}
                onChange={() => handleMonthClick(month)}
                className="transition duration-200 ease-in-out hover:opacity-50"
              />
              <span className="pl-2 text-base 2xl:text-xl ">{month}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidenavigationbar;
