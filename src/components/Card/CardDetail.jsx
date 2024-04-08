import { useParams } from "react-router-dom";
import getContent from "../../utils/getContent";
import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "../Navbar";
import Skeleton from "./Skeleton";
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
  }, [cardSlug]);

  if (!card) {
    return <Skeleton />;
  }

  return (
    // <div>
    //   <h1>{card.title}</h1>
    //   <p>{card.month}</p>
    //   <p>{card.description}</p>
    //   <img src={card.image} alt={card.title} />
    // className="w-96 h-96 object-cover rounded-lg"

    // </div>

    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mt-10">
          <img
            src={card.image}
            alt={card.title}
            className="w-96 h-96 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold mt-6">{card.title}</h1>
          <p className="text-lg text-gray-500 mt-2">{card.month}</p>
          <p className="text-lg text-gray-800 mt-4">{card.description}</p>
          <a
            href={`https://www.google.com/search?q=${card.title}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-blue-500 mt-4"
          >
            <span>Find out more</span>
            <GoArrowUpRight className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetail;
