import React from 'react';
import styles from './canvas.scss';
import TopControls from '../../../common/TopControls/TopControls';

const Canvas = props => (
    <div className="draw-page-canvas">
        <TopControls />
        <canvas 
            id="vedantuCanvas" 
            onTouchStart={props.mouseDown}
            onTouchMove={props.mouseMove}
            onTouchEnd={props.mouseUp}
            onMouseDown={props.mouseDown}
            onMouseMove={props.mouseMove}
            onMouseUp={props.mouseUp}
            width={window.innerWidth}
            height={window.innerHeight - 100}
            // onTouchMove={this.preventScrolling}
        />
        
    </div>
)

export default Canvas;

