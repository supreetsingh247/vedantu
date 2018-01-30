import React from 'react';
import styles from './baseLayout.scss';

const Controls = props => (
    <div>
        <div className="saved-list">
            Saved Items
            {props.canvases && props.canvases.length > 0 && props.canvases.map((canvas) => (
                <div>
                    <div className="item" key={canvas.id} onClick={props.openCanvas} data-attr={canvas.id}>
                        {canvas.id}
                    </div>
                    <button onClick={props.openInNewTab} data-attr={canvas.id}>Open in new Tab</button>
                </div>
            ))}
        </div>
        
    </div>
)

export default Controls;

