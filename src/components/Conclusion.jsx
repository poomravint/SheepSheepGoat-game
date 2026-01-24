import { use, useState } from "react";
import CardClusion from "./CardConclusion";
import "./Conclusion.css";
import Conclusion_RevealPopup from "./Conclusion_RevealPopup";
import Conclusion_GoatPopup from "./Conclusion_GoatPopup";
import Conclusion_GoatResult from "./Conclusion_GoatResult";

const Conclusion = ({ results, start, realans }) => {
  // สร้าง state เปิด/ปิด ให้เท่ากับจำนวนการ์ด
  const [openCards, setOpenCards] = useState(Array(results.length).fill(false));
  //* Popup State
  const [pendingIndex, setPendingIndex] = useState(null);
  const [goatpopup, setGoatPopup] = useState(false);
  const [goatanswer, setGoatAnswer] = useState("");
  const [goatresultpopup, setGoatResultPopup] = useState(false);
  const [goatresult, setGoatResult] = useState(false);

  const handleClick = (index) => {
    if (openCards[index]) return;
    setPendingIndex(index);
  };

  const confirmOpen = () => {
    setOpenCards((prev) => {
      const next = [...prev];
      next[pendingIndex] = true;
      return next;
    });
    setPendingIndex(null);
  };

  const cancelOpen = () => {
    setPendingIndex(null);
  };

  const handleReset = () => {
    setOpenCards(Array(results.length).fill(false));
  };

  const toggleGoatpopup = () => {
    setGoatPopup(true);
  };

  const confirmgoatAns = () => {
    if (realans === goatanswer) setGoatResult(true);
    else setGoatResult(false);

    setGoatAnswer("");
    setGoatPopup(false);
    setGoatResultPopup(true);
  };

  const closegoatAns = () => {
    setGoatPopup(false);
  };

  const closegoatresult = () => {
    setGoatResultPopup(false);
  };

  const aliveCount = {
    WhiteSheep: 0,
    BlackSheep: 0,
    Goat: 0,
  };

  results.forEach((item, index) => {
    if (!openCards[index]) {
      aliveCount[item.role]++;
    }
  });

  return (
    <>
      {/* Show alive players for each team */}
      <div className="alive-box">
        <p>WhiteSheep : {aliveCount.WhiteSheep}</p>
        <p>BlackSheep : {aliveCount.BlackSheep}</p>
        <p>Goat : {aliveCount.Goat}</p>
      </div>

      <div className="card-container">
        {start &&
          results.map((item, index) => (
            <CardClusion
              key={index}
              name={item.name}
              role={item.role}
              isOpen={openCards[index]}
              onClick={() => handleClick(index)}
            />
          ))}
      </div>

      <div className="btn-box">
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
        <button onClick={toggleGoatpopup} className="goat-btn">
          GOAT
        </button>
      </div>

      {/* Show Role Popup */}
      {pendingIndex !== null && (
        <Conclusion_RevealPopup
          name={results[pendingIndex].name}
          onConfirm={confirmOpen}
          onCancel={cancelOpen}
        />
      )}

      {/* Goat Popup */}
      {goatpopup && (
        <Conclusion_GoatPopup
          value={goatanswer}
          onChange={setGoatAnswer}
          onConfirm={confirmgoatAns}
          onCancel={closegoatAns}
        />
      )}

      {goatresultpopup && (
        <Conclusion_GoatResult result={goatresult} onClose={closegoatresult} />
      )}
    </>
  );
};

export default Conclusion;
