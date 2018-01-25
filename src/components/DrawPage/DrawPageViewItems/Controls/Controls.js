import React from 'react';
import styles from './controls.scss';

const Controls = props => (
    <div className="canvas-bottom-controls">
        <button onClick={props.setPencil} className="lower-btn">Pencil</button>
        <button onClick={props.setEraser} className="lower-btn">Eraser</button>
    </div>
)

export default Controls;

