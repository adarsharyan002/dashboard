import React from 'react';
import PriceCalculatorComponent from './PriceCalculator';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <PriceCalculatorComponent/>
      </div>
    </div>
  );
};

export default Modal;
