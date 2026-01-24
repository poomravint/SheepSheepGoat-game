const Conclusion_GoatResult = ({ result, realans, goatanswer, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-goatpopup">
        {result ? (
          <h3> 🎉 You are the best sheep 🎉</h3>
        ) : (
          <h3>❌ You are not a sheep ❌</h3>
        )}
        <span>Your answer : <strong>{goatanswer}</strong> </span>
        <span><br />Correct answer : <strong>{realans}</strong></span>
        <p></p>
        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion_GoatResult;
