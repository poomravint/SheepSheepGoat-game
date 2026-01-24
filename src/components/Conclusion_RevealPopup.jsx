const Conclusion_RevealPopup = ({ name, onConfirm, onCancel }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>
          Do you want to show <strong>{name}</strong> role?
        </p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion_RevealPopup;
