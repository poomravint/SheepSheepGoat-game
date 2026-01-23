import {useState} from "react";
import Card from "./Card.jsx";
import "./Card.css";

const Showmatching = ({ results }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="card-container">
        {results.map(({ name, word }, index) => (
          <Card
            key={index}
            name={name}
            word={word}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Showmatching;
