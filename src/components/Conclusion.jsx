import { useState } from "react";
import CardClusion from "./CardConclusion";
import "./Conclusion.css";

const Conclusion = ({ results, start }) => {
  // สร้าง state เปิด/ปิด ให้เท่ากับจำนวนการ์ด
  const [openCards, setOpenCards] = useState(Array(results.length).fill(false));
  //* Popup State
  const [pendingIndex, setPendingIndex] = useState(null);

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

  return (
    <>
      <div className="card-container">
        {start && results.map((item, index) => (
          <CardClusion
            key={index}
            name={item.name}
            role={item.role}
            isOpen={openCards[index]}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button onClick={handleReset} className="reset-btn">
        Reset
      </button>

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
    </>
  );
};

export default Conclusion;
