import React from 'react'
import { SketchPicker }  from 'react-color';
import palette from '../assets/palette.svg';
import styled from 'styled-components';

const SideBar = styled.div`
.return {
    height 100%;
}
    #sidebar {
        background: #BC909D;
        width: 50px;
        overflow-x: hidden;
        height: 100%;
        z-index: 0;
    }
    .sketchPicker {
        position: absolute;
        margin-left: 50px;
    }

`;

class Easel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            penColor : 'purple',
            showComponent : false
        };
    };

    handleChangeComplete = (color, event) => {
        this.props.handleColorChange(color);
        this.setState({penColor : color.hex })
        console.log("Change color in Easel");
    }

    handlePaletteClick = (thing) => {
        console.log("placeholder");
    }
    showOrHide = () => {
        if (!this.state.showComponent) {
            this.setState({showComponent : true});
        } else {
            this.setState({showComponent : false});
        }
    }

    render () {
        return (
            <div className="return">
                <SideBar>
                    <div className="sketchPicker">
                        {this.state.showComponent && <SketchPicker style={{zIndex: 100 }}id="sketchPicker" hide={this.state.showComponent} onChangeComplete={this.handleChangeComplete} color={this.state.penColor} />}
                    </div>
                    <div id="sidebar">
                        <img id="svg" alt="palette" height="50px" width="50px" src={palette}
                         onClick={() => this.showOrHide()} />
                    </div>
                </SideBar>
            </div>
        );
    }

}

export default Easel;
