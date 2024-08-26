import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal){
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        open
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>sdhfsdhfsdfjks</p>
            <button className="close-modal" onClick={toggleModal}>
              close{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
