import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';


const Modal = props => {
  return (
    <Fragment>
      <Backdrop onClick={props.close} show={props.show} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
          <div className="modalTitle">{props.title}
          <img alt="btn" src={props.imgUrl} className="dltImage" onClick={props.closed}/>
          </div>
          <div className="modalText">{props.text}</div>
      </div>
    </Fragment>
  );
};

export default Modal;