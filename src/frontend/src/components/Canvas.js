import React from 'react';
import styled from 'styled-components';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);
    }
    isPainting = false;
    userStrokeStyle = '#EE92C2';
    guestStrokeStyle = '#F0C987';
    line = [];
    userId = v4();
    prevPos = {offsetX: 0, offsetY: 0};


    onMouseDown({ nativeEvent }) {
        if (this.isPainting) {
            const {offsetX, offsetY } = nativeEvent;
        }
    }

    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {

    }
}
