import React from 'react';
import styled from 'styled-components';

import Canvas from '../components/Canvas.js'
import NavBar from '../components/NavBar.js';
import Easel from '../components/Easel.js';
import WordPicker from '../components/WordPicker.js'
import Chat from '../components/Chat.js'


const ContentStyle = styled.div`
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        height: 100%;
    }
    .wrapper > * {
        flex: 1 100%;
    }
    .navBar {
        order: 1;
    }
    .mainScreen {
        /* item properties */
        flex-grow: 1;
        order: 2;
        
        /* Also a container */
        display: flex;
        flex-direction: row;


        /* else */
        height: 100%;
    }
    .bottomScreen {
        order: 3;
        justify-content: flex-start;
    }
    .wordPickerWrapper {
        order: 2;
        height: 100%;
        background-color: white;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        background-color: #94cbca;
    }

    /* Bottom screen elements */
    #easel {
        order: 1;
        top: 0;
        position: fixed;
        z-index: 100;
    }
    #canvas {
        order: 2;
    }
    #chat {
        flex-grow: 1;
        order: 3;
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
                    <NavBar className ="nav"/>
                    <div className="mainScreen">
                        <Easel id="easel" handleColorChange={this.handleColor} />
                        <Canvas id="canvas" color={this.state.penColor} />
                        <Chat id="chat" />
                    </div>
                    <div className="bottomScreen">
                        <WordPicker id="wordPicker" />
                    </div>
                </div>

        </ContentStyle>
        );
    }
}

export default GameScene;
