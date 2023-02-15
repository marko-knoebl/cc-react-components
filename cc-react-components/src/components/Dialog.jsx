import React from "react";
import "./Dialog.css";

function Dialog({ alert, onClose, isOpen }) {

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div className={`dialog ${isOpen ? "open" : "closed"}`}>
      <p>{alert}</p>
      <button onClick={handleClose}>Understand</button>
    </div>
  );
}

export default Dialog;
