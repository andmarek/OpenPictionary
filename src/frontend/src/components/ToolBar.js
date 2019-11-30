import React from 'react'
import styled from 'styled-components'
import { SketchPicker } from 'react-color'
//import PropTypes from 'prop-types';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: '#fff',
        };
    };
    
    getContent(event) {
        this.props.callback(event.target.value);
    }

    handleChangeComplete = ( color ) => {
        this.setState({currentColor: color.hex});
        console.log("help " + this.state.currentColor);
    }
    render() {
        return (
            <div id="toolBar">
                <SketchPicker 
                color = { this.state.currentColor} 
                onChangeComplete = {this.handleChangeComplete}
                />
                <p> This is a toolbar </p>
              <div id="red"></div>
              <div id="blue"></div>
              <div id="yellow"></div>
              <div id="green"></div>
              <div id="maroon"></div>
            </div>
        );
    }
}

export default ToolBar;