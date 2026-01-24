const Conclusion_GoatResult = ({ result, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-goatpopup">
        {result ? (
          <h3> 🎉 You are the best sheep 🎉</h3>
        ) : (
          <h3>❌ You are not a sheep ❌</h3>
        )}
        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion_GoatResult;
