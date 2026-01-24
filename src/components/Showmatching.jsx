import { useState } from "react";
import Card from "./Card.jsx";
import "./Card.css";

const Showmatching = ({ results, start, setStart }) => {
  const [openIndex, setOpenIndex] = useState(null); 

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleStatus = () => {
    setStart(!start);
  };

  return (
    <>
      {
        <div className="card-container">
          {!start &&
            results.map(({ name, word }, index) => (
              <Card
                key={index}
                name={name}
                word={word}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
        </div>
      }
      {results.length > 0 && !start && <button className="start-btn" onClick={toggleStatus}>
        Start
      </button>}
    </>
  );
};

export default Showmatching;
