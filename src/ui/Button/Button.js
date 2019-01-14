import React, {Fragment} from 'react';

import './Button.css';

const Button = props => (<Fragment>
        <button
            onClick={props.onClick} className={['Button', props.btnType].join(' ')}>{props.label}</button>
    </Fragment>
);

export default Button;