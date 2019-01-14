import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';
import Button from "../Button/Button";


const Modal = props => {
    return (
        <Fragment>
            <Backdrop onClick={props.close} show={props.show}/>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modalTitle">{props.title}</div>
                <div className="modalText">{props.text}</div>
                <div className="btnDiv">
                    {props.config.map((item, id) => {
                        return <Button onClick={item.clicked} key={id} btnType={item.type} label={item.label}
                                       show={props.show}/>
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;