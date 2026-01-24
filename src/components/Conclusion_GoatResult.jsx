const Conclusion_GoatResult = ({ result, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-goatpopup">
        {result ? (
          <h3>Sheep were tricked by a Goat 🐐</h3>
        ) : (
          <h3>Goat is a Goat, not a Sheep 🐑</h3>
        )}
        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion_GoatResult;
