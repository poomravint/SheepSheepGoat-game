const Conclusion_GoatPopup = ({
  value,
  onChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-goatpopup">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your answer"
        />
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion_GoatPopup;
