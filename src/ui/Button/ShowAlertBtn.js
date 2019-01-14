import React from 'react';

const ShowAlertBtn = props => (!props.show ?
    <button className="showAlert" onClick={props.onClickBtn}>Show Alert</button> : null);

export default ShowAlertBtn;