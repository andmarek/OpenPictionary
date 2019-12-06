import React from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';
import Canvas from '../components/Canvas.js'
import NavBar from '../components/NavBar.js';
import Easel from '../components/Easel.js';
import { SketchPicker } from 'react-color';
const ContentStyle = styled.div`
    .wrapper {

    }
    #easel {
        position: absolute;
        float: left;
        z-index: 100;
    }
    #canvas {
    }
`;
class GameScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasDrawer : 'purple',
        };
    };
    
    handleColor = (color, event) => {
        this.setState({ penColor : color.hex})
        console.log("changed color");
    }

    render() {
        return (
        <ContentStyle>
        <div className="wrapper">
            <NavBar />
            <Easel id="easel" handleColorChange={this.handleColor} />
            <Canvas id="canvas" color={this.state.penColor} />
        </div>
        </ContentStyle>
        );
    }
}

export default GameScene;
