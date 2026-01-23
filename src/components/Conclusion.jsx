import { use, useState } from "react";
import CardClusion from "./CardConclusion";
import "./Conclusion.css";

const Conclusion = ({ results, start, realans }) => {
  // สร้าง state เปิด/ปิด ให้เท่ากับจำนวนการ์ด
  const [openCards, setOpenCards] = useState(Array(results.length).fill(false));
  //* Popup State
  const [pendingIndex, setPendingIndex] = useState(null);
  const [goatpopup, setGoatPopup] = useState(false)
  const [goatanswer, setGoatAnswer] = useState("")
  const [goatresultpopup, setGoatResultPopup] = useState(false)
  const [goatresult, setGoatResult] = useState(false)
  


  // const handleClick = (index) => {
  //   setOpenCards((prev) => {
  //     const next = [...prev];
  //     next[index] = true; // 🔥 เปิดแล้ว เปิดค้าง
  //     return next;
  //   });
  // };

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
    setGoatPopup(true)
  }

    const confirmgoatAns = () => {
    if (realans === goatanswer)
      setGoatResult(true)
    else
      setGoatResult(false)

    setGoatAnswer("")
    setGoatPopup(false);
    setGoatResultPopup(true)
    }

  const closegoatAns = () => {
    setGoatPopup(false);
  };

   const closegoatresult = () => {
    setGoatResultPopup(false);
  };


  return (
    <>
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
        <button onClick={toggleGoatpopup} className="goat-btn">GOAT</button>
      </div>
      {/* Show Role Popup */}
      {pendingIndex !== null && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>
              Do you want to show <strong>{results[pendingIndex].name}</strong>{" "}
              role
            </p>
            <div className="modal-actions">
              <button onClick={confirmOpen}>Yes</button>
              <button onClick={cancelOpen}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Goat Popup */}
      {goatpopup && (
        <div className="modal-backdrop">
          <div className="modal-goatpopup">
            <input type="text"
              value={goatanswer}
              onChange={(e) => setGoatAnswer(e.target.value)}
              placeholder="Enter your anwser" />
            <div className="modal-actions">
              <button onClick={confirmgoatAns}>Yes</button>
              <button onClick={closegoatAns}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {goatresultpopup && (<div className="modal-backdrop">
          <div className="modal-goatpopup">
            {goatresult === true && <h3>Stupid sheep you were trick by a Goat</h3>}
            {goatresult === false && <h3>Goat is a GOAT not a Sheep</h3>}
            <div className="modal-actions">
              <button onClick={closegoatresult}>Close</button>
            </div>
          </div>
        </div>)}
    </>
  );
};

export default Conclusion;
