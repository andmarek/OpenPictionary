import React from 'react';
import styled from 'styled-components';

import Canvas from '../components/Canvas.js'
import NavBar from '../components/NavBar.js';
import Easel from '../components/Easel.js';
import WordPicker from '../components/WordPicker.js'
import Chat from '../components/Chat.js'

let words = ["tree", "square", "cat", "dog", "house", "gazelle"];

let randomWord = words[parseInt(Math.random()*words.length + 1)];


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
    /* Main screen elements */
    #easel {
        order: 1;
        top: 0;
        height: 100%;
        position: fixed;
        z-index: 100;
        flex-grow: 1;
    }
    #canvas {
        order: 2;
    }
    #chat {
        flex-grow: 1;
        order: 3;
    }

    /* Bottom screen elements */
    .bottomScreen {
        order: 3;
        justify-content: flex-start;
    }
    
    
`;
class GameScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasDrawer : 'purple',
            wordToDraw : randomWord,
        };
    };
    componentDidMount() {
        console.log("random word game scene" + randomWord);
    }    
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
                        <WordPicker wordToDraw={randomWord} id="wordPicker" />
                    </div>
                </div>

        </ContentStyle>
        );
    }
}

export default GameScene;
