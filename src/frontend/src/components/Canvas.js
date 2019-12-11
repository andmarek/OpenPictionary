import React from 'react';
import styled from 'styled-components'

const URL = 'ws://localhost:3030'

const CanvasStyle = styled.div`
   #myCanvas {
        background-color: white;
        border-style: solid;
        border-width: 2px;
        border-color: #BC909D;
   }
`;
class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color : this.props.color,
            drawnBuffer : [],
            drawing : false
        };
    };

    ws = new WebSocket(URL);

    componentDidMount() {
        this.ws.onopen = () => {
            console.log("canvas connected");
        };

        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.rect = this.canvas.getBoundingClientRect();
        this.x = 0;
        this.y = 0;

        this.ws.onmessage  = evt => {
            // Upon receiving messages we:
            let coords = JSON.parse(evt.data);

            //console.log("coords we're receiving " , evt.data);
            this.setState({ drawnBuffer : coords });

            //console.log(coords);

            //this.drawLine(this.ctx, 1, 1, 100, 100);
            console.log("coords", coords.x1, coords.x2, coords.y1, coords.y2);

            this.drawLine(this.ctx, coords.x1, coords.y1, coords.x2, coords.y2);
            //this.drawLine(this.ctx, coords.x1, coords.x2, coords.y1, coords.y2);

            this.setState({drawnBuffer : []});
            } 
        
        this.ws.onclose = () => {
            console.log('disconnected')
            this.setState({
                ws : new WebSocket(URL),
            })
        }
    }
    
    drawLine = (context, x1, y1, x2, y2) => {

            context.beginPath();
            context.strokeStyle = this.props.color;
            context.lineWidth = 4;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            context.closePath();

            // Saves coords to send to server
            //const coords = {x1: x1, x2: x2, y1: y1, y2: y2};

        }
        handleMouseDown = (e) => {
            this.setState ({drawing: true});
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

            let metaData = this.ctx.getImageData(0,0, 1000, 500).data;
            let data = this.ctx.getImageData(0,0, 1000, 500);
            
            // Might need this eventually 
            this.setState({drawnBuffer : metaData.buffer});
            this.ws.send(metaData.buffer);
            this.ctx.putImageData(data, 0, 0);
        }
        
        handleMouseMove = (e) => {
            if (this.state.drawing === true) {
                console.log('mouse moving');
                this.drawLine(this.ctx, this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);

                this.ws.send(JSON.stringify({
                    x1: this.x,
                    y1: this.y,
                    x2: e.clientX-this.rect.left,
                    y2: e.clientY - this.rect.top
                }));

                this.x = e.clientX - this.rect.left;
                this.y = e.clientY - this.rect.top;

                //console.log("drawing");
                
            }
        }
    render() {
    return(
            <div>
             <CanvasStyle>
                <canvas ref='canvas' id='myCanvas' width='1000px' height='500px'
                onMouseDown={(e) => this.handleMouseDown(e)} onMouseMove={(e) => this.handleMouseMove(e)}
                onMouseUp={(e) => this.handleMouseUp(e)}/>
             </CanvasStyle>
            </div>
    );
    }
}
export default Canvas;
