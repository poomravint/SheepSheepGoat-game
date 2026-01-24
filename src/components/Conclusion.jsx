import { useEffect, useState } from "react";
import CardClusion from "./CardConclusion";
import "./Conclusion.css";
import Conclusion_RevealPopup from "./Conclusion_RevealPopup";
import Conclusion_GoatPopup from "./Conclusion_GoatPopup";
import Conclusion_GoatResult from "./Conclusion_GoatResult";

const Conclusion = ({ results, start, realans }) => {
  // สร้าง state เปิด/ปิด ให้เท่ากับจำนวนการ์ด
  const [openCards, setOpenCards] = useState([]);
  // Prevent Goat Popup Bug
  const [prevPopup, setPrevPopup] = useState(false);

  //! 🔥 reset อัตโนมัติ เมื่อ results เปลี่ยน (สุ่มใหม่)
  useEffect(() => {
    setOpenCards(Array(results.length).fill(false));
    setPrevPopup(false);
  }, [results]);

  //! Goat auto Popup
  useEffect(() => {
     // หา index ของการ์ด Goat ที่ถูกเปิด
  const goatIndex = openCards.findIndex(
    (isOpen, index) =>
      isOpen === true && results[index]?.role === "Goat"
  );

  // ถ้าเจอ Goat และ popup ยังไม่เปิด
  if (goatIndex !== -1 && !goatpopup && !goatresultpopup && !prevPopup) {
    setGoatPopup(true);
  }
  }, [openCards]);

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

  const confirmgoatAns = () => {
    if (realans === goatanswer) setGoatResult(true);
    else setGoatResult(false);

    setGoatAnswer("");
    setGoatPopup(false);
    setPrevPopup(true);
    setGoatResultPopup(true);
  };

  const closegoatAns = () => {
    setGoatPopup(false);
    setPrevPopup(true);
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
      {start && (
        <div className="alive-box">
          <div className="whitesheep-alivebox">
            <p>
              <strong>{aliveCount.WhiteSheep}</strong> 🤍
            </p>
          </div>
          <div className="blacksheep-alivebox">
            <p>
              <strong>{aliveCount.BlackSheep}</strong> 🖤
            </p>
          </div>
          <div className="goat-alivebox">
            <p>
              <strong>{aliveCount.Goat}</strong> 🩶
            </p>
          </div>
        </div>
      )}

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
