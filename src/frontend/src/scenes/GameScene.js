import React from 'react'
import styled from 'styled-components'
import ColorPalette from '../components/ColorPalette.js'
import NavBar from '../components/NavBar.js';

class GameScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
        <div>
            <NavBar />
            <ColorPalette/>
            <h1> This is the game. </h1>
        </div>
        );
    }
}

export default GameScene;
