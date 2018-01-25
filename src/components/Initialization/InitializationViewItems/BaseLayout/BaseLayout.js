import React from 'react';
import styles from './baseLayout.scss';
import TextField from '../../../common/TextField/TextField';

const Controls = props => (
    <div>
        <div className="header">
            Welcome to Vedantu
        </div>
        <form id="initForm">
        <TextField 
            placeholder="Name of Project"
            name="projectName"
            value={props.projectName}
            required={true}
            onChange={props.onChange}
            className="name"
            type="text"
        />
        <TextField 
            placeholder="Your Email"
            name="email"
            value={props.email}
            required={true}
            onChange={props.onChange}
            className="email"
            type="email"
            disabled={props.emailDisabled}
        />
        <input type="submit" onClick={props.submitForm} className="submit" value="Submit" />
        </form>
    </div>
)

export default Controls;

