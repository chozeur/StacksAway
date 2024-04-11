import React from "react";

const Badge = ({ text }) => (
  <div className="flex items-center px-2 py-1 sm:px-3 md:px-6   bg-primary rounded-full text-super-dark-gray font-bold text-xs xl:text-base ">
    <span>{text}</span>
  </div>
);

const Card = ({ month, program, title, picUrl }) => {
  return (
    <div className="bg-dark-charcoal border-2 2xl:border-4 h-[2/3] w-full border-outline rounded-xl border-opacity-15  overflow-hidden  hover:border-opacity-50 transition-colors duration-150 ease-in group @container ">
      <div className=" bg-dark-charcoal flex flex-col @[30rem]:flex-row @[30rem]:items-center justify-between items-start gap-y-4">
        <div>
          <div className="bg-super-dark-gray flex items-center justify-center pb-[15%] pt-[15%]  rounded-b-2xl">
            <div className="w-2/3 rounded-3xl overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0 ">
              <div>
                <img
                  src={picUrl}
                  alt={title}
                  className="w-100 h-100 object-cover object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <h2 className="font-bold p-5 text-sm sm:text-base lg:text-base xl:text-xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex space-x-3 px-3 py-6">
        <Badge text={month} />
        <Badge text={program} />
      </div>
    </div>
  );
};

export default Card;
