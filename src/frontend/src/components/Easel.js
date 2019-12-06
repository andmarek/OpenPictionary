import React from 'react'
import { SketchPicker }  from 'react-color';
import palette from '../assets/palette.svg';
import styled from 'styled-components';
const SideBar = styled.div`
    .wrapper {
        height: 100%;
        position: absolute;
    }
    .test {
        z-index: 100;
    }

    #sidebar {
        background: #BC909D;
        height: 100%;
        width: 50px;
        position: relative;
        left: 0;
        overflow-x: hidden;
        position: fixed;
    }
`;
const Things = styled.div`
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
            <div class="wrapper">
                <Things> 
                    <div className="sketchPicker">
                        {this.state.showComponent && <SketchPicker style={{zIndex: 100 }}id="sketchPicker" hide={this.state.showComponent} onChangeComplete={this.handleChangeComplete} color={this.state.penColor} />}
                    </div>
                </Things>
                <SideBar>
                <div className="wrapper">
                    <div id="sidebar">
                        <img id="svg" alt="palette" height="50px" width="50px" src={palette} 
                         onClick={() => this.showOrHide()} />
                    </div>
                </div>
                </SideBar>
            </div>
        );
    }

}

export default Easel;
