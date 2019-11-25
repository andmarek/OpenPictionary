import React from 'react';
import styled from 'styled-components'


/*function drawLine(context, x1, y1, x2, y2) {

}*/

const CanvasStyle = styled.div`
   #myCanvas {
        border-style: solid;
        border-width: 1px;
   }
`;
class ColorPalette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawing : false
        };
    };

    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.rect = this.canvas.getBoundingClientRect();

        this.x = 0;
        this.y = 0;
    }
    drawLine = (context, x1, y1, x2, y2) => {
           context.beginPath();
           context.strokeStyle = 'red';
           context.lineWidth = 4;
           context.moveTo(x1, y1);
           context.lineTo(x2, y2);
           context.stroke();
           context.closePath();
 
        }
        handleMouseDown = (e) => {
            this.state.drawing = true;
            console.log('draw');
        }

        handleMouseUp = (e) => {
            this.state.drawing = false;
            console.log('mouse up');
        }

        handleMouseMove = (e) => {
            if (this.state.drawing === true) {
                console.log('mouse moving');
                let x = e.clientX;
                let y = e.clientY;
                console.log(this.ctx, x, y, e.clientX - this.rect.left, e.clientY - this.rect.top);
                this.drawLine(this.ctx, x, y, e.clientX - this.rect.left, e.clientY - this.rect.top);
                x = 0;
                y = 0;
            }
        }
    render() {
    return(
        <div id="color_palette">
            <div className="wrapper">
             <CanvasStyle>
                <canvas ref='canvas' id='myCanvas' width='500' height='500' 
                onMouseDown={(e) => this.handleMouseDown(e)} onMouseMove={(e) => this.handleMouseMove(e)}
                onMouseUp={(e) => this.handleMouseUp(e)}/>
             </CanvasStyle>
            </div>

            <div id="red"></div>
            <div id="blue"></div>
            <div id="yellow"></div>
            <div id="green"></div>
            <div id="maroon"></div>
        </div>
    );
    }
}
export default ColorPalette;
