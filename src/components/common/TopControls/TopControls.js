import React from 'react';
import styles from './topControls.scss';
import { Link } from 'react-router';

const TopControls = props => (
    <div className="canvas-top-controls">
        <Link to="/initialization">
            <button className="upper-btn">Initialize</button>
        </Link>
        <Link to="/draw-page">
            <button className="upper-btn">Draw</button>
        </Link>
        <Link to="/saved-items">
            <button className="upper-btn">Saved</button>
        </Link>
    </div>  
)

export default TopControls;

