import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const openPortalTo = document.getElementById("overlays");
  return (
    <React.Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        openPortalTo
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        openPortalTo
      )}
    </React.Fragment>
  );
};
export default Modal;
