import React from 'react';
import TopControls from '../common/TopControls/TopControls';
import styles from './savedItems.scss';
import BaseLayout from './SavedItemsView/BaseLayout/BaseLayout';
import { storeLocalData, getLocalData } from '../common/Helper';
import { browserHistory } from 'react-router';

class SavedItemsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            canvases: null,
        }
        this.appendThumbnail = this.appendThumbnail.bind(this);
        this.openCanvas = this.openCanvas.bind(this);
    }

    componentDidMount () {
        let currentProjectName = getLocalData('currentProject') && getLocalData('currentProject').name;
        let projects = getLocalData('projects');
        if(projects && currentProjectName) {
            for(let i=0; i< projects.length; i++) {
                if(projects[i].name === currentProjectName) {
                    this.setState({ canvases: projects[i].canvases });
                }
            }
        } else {
            alert('Something is wrong. Please initiate a new project!');
        }
    }

    openCanvas (e) {
        console.log(e.currentTarget);
        var id = e.currentTarget.dataset.attr;
        if(id) {
            browserHistory.push('/draw-page?id=' + id);
        }
    }

    appendThumbnail () {
        // for(let i = 0; i < this.state.canvases.length; i++) {
        //     setTimeout(() => {
        //         var image = new Image();
        //         image.onload = function () {
        //             document.body.appendChild(image);
        //         }
        //         image.src = this.state.canvases[i];
        //     }, 1000); 
        // }
        // var image = new Image();
        // image.src = 'data:image/png;base64,iVBORw0K...';
        // document.body.appendChild(image);
    }

    render() {
        console.log(this.state.canvases);
        return (
            <div className="saved-items">
                <TopControls />
                <BaseLayout 
                    canvases={this.state.canvases}
                    openCanvas={this.openCanvas}
                />
            </div>

        );
    }
}

export default SavedItemsContainer;