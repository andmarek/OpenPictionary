import React from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types';
import Canvas from '../components/Canvas.js'
import NavBar from '../components/NavBar.js';
import { SketchPicker } from 'react-color'

class GameScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            penColor : 'purple',
        };
    };
    
    handleChangeComplete = (color, event) => {
        this.setState({ penColor : color.hex})
        console.log("changed color");
    }

    render() {
        return (
        <div>
            <NavBar />
            <SketchPicker
                onChangeComplete = {this.handleChangeComplete}
                color= {this.state.penColor}
                />
            <Canvas color={this.state.penColor} />
        </div>
        );
    }
}

export default GameScene;
