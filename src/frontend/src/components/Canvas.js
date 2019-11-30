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
class Canvas extends React.Component {
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
           context.strokeStyle = this.props.color;
           context.lineWidth = 4;
           context.moveTo(x1, y1);
           context.lineTo(x2, y2);
           context.stroke();
           context.closePath();
 
        }
        handleMouseDown = (e) => {
            this.state.drawing = true;
            this.x = e.clientX - this.rect.left;
            this.y = e.clientY - this.rect.top;

            console.log('draw');
        }

        handleMouseUp = (e) => {
            if (this.state.drawing === true) {

            this.state.drawing = false;
            this.drawLine(this.ctx, this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);
            console.log('mouse up');
            }
        }

        handleMouseMove = (e) => {
            if (this.state.drawing === true) {
                console.log('mouse moving');
                this.drawLine(this.ctx, this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);
                this.x = e.clientX - this.rect.left;
                this.y = e.clientY - this.rect.top;
            
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
export default Canvas;
