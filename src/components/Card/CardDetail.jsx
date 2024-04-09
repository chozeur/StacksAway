import { useParams } from "react-router-dom";
import getContent from "../../utils/getContent";
import { useState, useEffect, memo } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import Navbar from "../Navbar";
import Skeleton from "./Skeleton";
import Button from "../Buttons";
import Footer from "../Footer";

function CardDetail() {
  const { cardSlug } = useParams();
  const [content, setContent] = useState([]);
  const [card, setCard] = useState(null);
  const { getOpporunities } = getContent();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOpporunities().then((response) => {
      setContent(response);
      const matchedCard = response.find((card) => card.slug === cardSlug);
      setCard(matchedCard);
    });
    window.scrollTo(0, 0);
  }, [cardSlug]);

  if (!card) {
    return <Skeleton />;
  }

  const Badge = memo(({ text }) => (
    <div className="flex items-center justify-center px-3 py-2 bg-primary rounded-full text-super-dark-gray font-bold text-xs xl:text-sm 2xl:text-base">
      <span className="flex ">
        {text}
        <GoArrowUpRight />
      </span>
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-4 justify-items-center items-center ">
        {/* left side */}
        <div className="bg-dark-charcoal border-4 mt-10  border-outline rounded-xl border-opacity-15 overflow-hidden w-full sm:w-3/4 hover:border-opacity-50 transition-colors duration-150 ease-in group container">
          <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
            <div className="absolute w-2/3 rounded-3xl overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0 ">
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-100 h-100 object-cover object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex p-6 ">
            <a href={card.blog} target="_blank" rel="noopener noreferrer">
              <Badge text="Read Blog" />
            </a>
          </div>
        </div>

        {/* right side */}

        <div className="pr-10 space-y-8">
          <h1 className="text-3xl font-bold mt-10 ">{card.title}</h1>
          <p className="text-lg font-normal mt-2  ">{card.description}</p>
          <Button href={card.link}>Visit Official Website</Button>
          <div>
            <div className=" gap-x-1 grid grid-cols-12 border-t-2 border-outline border-opacity-20 py-2">
              <h2 className=" font-semibold col-span-4">Program</h2>
              <span className=" col-span-8 text-text px-1">{card.program}</span>
            </div>
            <div className=" gap-x-1 grid border-t-2 border-t-dim-gray grid-cols-12 ">
              <h2 className=" font-semibold col-span-4 pt-2">Month</h2>
              <span className="flex flex-col col-span-8  text-text">
                <span className=" py-2 border-b-2 border-outline border-opacity-20 px-1">
                  {card.month}
                </span>
                <span className="flex space-x-6 py-2 border-b-2 border-outline border-opacity-20 px-1">
                  <a
                    href={card.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord size={25} />
                  </a>
                  <a
                    href={card.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={25} />
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetail;
