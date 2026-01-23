import React from "react";
import "./CardConclusion.css"

const CardClusion = ({name,role, isOpen, onClick}) => {
  
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className={`ccard-inner ${isOpen ? "flip" : ""}`}>
        {/* ด้านหน้า */}
        <div className="ccard-front">
          <h3>{name}</h3>
        </div>

        {/* ด้านหลัง */}
        <div className="ccard-back">
          <h3>{name}</h3>
          <h3>{role}</h3>
        </div>
      </div>
      </div>
    </>
  );
};

export default CardClusion;
