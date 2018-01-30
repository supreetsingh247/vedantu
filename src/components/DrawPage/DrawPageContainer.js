import React from 'react';
import Canvas from './DrawPageViewItems/Canvas/Canvas';
import Controls from './DrawPageViewItems/Controls/Controls';
import styles from './drawPage.scss';
import { storeLocalData, getLocalData } from '../common/Helper';

class DrawPageContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isMouseDown: false,
            x: null,
            y: null,
            color: "black",
            width: 1,
            autoSaveTime: 4000,
            timer: null,
        }
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.drawPoint = this.drawPoint.bind(this);
        this.setPencil = this.setPencil.bind(this);
        this.setEraser = this.setEraser.bind(this);
        this.saveCanvas = this.saveCanvas.bind(this);
        this.restoreCanvas = this.restoreCanvas.bind(this);
        // this.preventScrolling = this.preventScrolling.bind(this);
    }

    componentDidMount () {
        var self = this;
        let openCanvasId = null;
        if(this.props.location && this.props.location.query) {
            openCanvasId = this.props.location.query.id;
            this.restoreCanvas(openCanvasId);
        }
        // setTimeout(function(){ self.saveCanvas(); }, 10000);
        // setInterval(function() {
        //     self.saveCanvas();
        // }, 10000);
    }

    componentWillUnmount () {
        window.clearTimeout(this.state.timer); 
        this.setState({ timer: null });
    }

    saveCanvas () {
        var self = this;
        const c = document.getElementById("vedantuCanvas");
        const canvasElem = c.getContext("2d");
        const imageBase64String = c.toDataURL();
        const id = new Date().getTime();
        console.log(id);
        let projects = getLocalData('projects');
        let currentProjectName = getLocalData('currentProject') && getLocalData('currentProject').name;
        if(projects && currentProjectName) {
            for(let i=0; i< projects.length; i++) {
                if(projects[i].name === currentProjectName) {
                    let currentImage = { id: id, image: imageBase64String}
                    projects[i].canvases.push(currentImage);
                    storeLocalData('projects', projects);
                    console.log(projects);
                    // console.log(projects);
                }
            }
        } else {
            alert('Something is wrong. Please initiate a new project!');
        }
    }

    restoreCanvas (id) {
        const c = document.getElementById("vedantuCanvas");
        const canvasElem = c.getContext("2d");
        let currentProjectName = getLocalData('currentProject') && getLocalData('currentProject').name;
        let projects = getLocalData('projects');
        let canvases = [];
        let indexProject = null;
        let indexCanvas = null;
        if(projects && currentProjectName) {
            for(let i=0; i< projects.length; i++) {
                if(projects[i].name === currentProjectName) {
                    canvases = projects[i].canvases;
                    indexProject = i;
                }
            }
        } else {
            alert('Something is wrong. Please initiate a new project!');
        }
        
        let current = null;
        for(let i=0; i< canvases.length; i++) {
            if(canvases[i].id == id) {
                current = canvases[i].image;
                indexCanvas = i;
            }
        }

        if(current) {
            projects[indexProject].canvases =  projects[indexProject].canvases.slice(0, indexCanvas + 1);
            storeLocalData('projects', projects);
            let image = new Image();
            image.onload = function() {
                canvasElem.drawImage(image, 0, 0);
            };
            image.src = current;
        }
    }

    mouseUp () {
        var self = this;
        this.setState({ isMouseDown: false });

        
        window.clearTimeout(this.state.timer); 
        this.setState({ timer: null });
        this.setState({ timer: window.setTimeout(self.saveCanvas, self.state.autoSaveTime) })
        // setTimeout(function(){ self.saveCanvas(); }, this.state.autoSaveTime);
    }

    mouseMove (e) {
        let x, y;
        if (this.state.isMouseDown) {
            if(e.changedTouches) {
                for(var i=0;i<e.changedTouches.length;i++){
                    x = e.changedTouches[i].clientX;
                    y = e.changedTouches[i].clientY;
                    this.drawPoint(x, y);
                }
            } else {
                x = e.clientX;
                y = e.clientY;
                this.drawPoint(x, y);
            }
        }
    }

    mouseDown (e) {
        if(e.changedTouches) {
            this.setState({ isMouseDown: true, x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY });
        } else {
            this.setState({ isMouseDown: true, x: e.clientX, y: e.clientY });
        }
    }

    setEraser () {
        this.setState({ color: "white", width: 10 });
    }

    setPencil () {
        this.setState({ color: "black", width: 1 });
    }

    preventScrolling (e) {
        //e.preventDefault();
    }

    drawPoint (x, y) {
        var c = document.getElementById("vedantuCanvas");
        var canvasElem = c.getContext("2d");
        canvasElem.beginPath();
        canvasElem.moveTo(this.state.x,this.state.y);
        canvasElem.lineTo(x,y);
        canvasElem.strokeStyle = this.state.color;
        canvasElem.lineWidth = this.state.width;
        canvasElem.stroke();
        this.setState({ isMouseDown: true, x: x, y: y });
        
    }

    render () {
        return (
            <div className="vedantu-canvas-page">
                <Canvas
                    mouseDown={this.mouseDown}
                    mouseMove={this.mouseMove}
                    mouseUp={this.mouseUp}
                    mouseDown={this.mouseDown}
                    mouseMove={this.mouseMove}
                    mouseUp={this.mouseUp}
                />
                <Controls 
                    setEraser={this.setEraser}
                    setPencil={this.setPencil}
                />
            </div>
        )
    }
}

export default DrawPageContainer;
