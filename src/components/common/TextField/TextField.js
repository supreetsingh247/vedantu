
import React from 'react';
import styles from './textField.scss';

const TextField = props => (
    <div className="text-field">
        <input 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            className={props.className}
            disabled={props.disabled || false}
        />
    </div>  
)

export default TextField;

