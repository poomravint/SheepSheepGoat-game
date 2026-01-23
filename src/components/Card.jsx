import React from "react";
import "./Card.css"

const Card = ({name,word, isOpen, onClick}) => {
  
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className={`card-inner ${isOpen ? "flip" : ""}`}>
        {/* ด้านหน้า */}
        <div className="card-front">
          <h3>{name}</h3>
        </div>

        {/* ด้านหลัง */}
        <div className="card-back">
          <h3>{word}</h3>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
