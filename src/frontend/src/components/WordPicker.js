import React from 'react';
import styled from 'styled-components';

let words = ["tree", "square", "cat", "dog", "house", "gazelle"];

let randomWord = words[parseInt(Math.random()*words.length)];

const Styles = styled.div`
    .wrapper {
        flex-grow: 1;

        border-style: solid;
        border-width: 2px;
        border-color: black;

        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        background-color: #94cbca;
    }
    .title-text {
        font-size: 48px;
    }
`;

class WordPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word :  ""
        };
        
    };
    componentDidMount() {
            this.setState({word : this.props.wordToDraw});

            console.log("word to draw HECK" + this.props.wordToDraw);
    };
    render() {
        return (
            <Styles>
            <div className="wrapper">
                <p className="title-text"> You need to draw: </p>
                <p> {  this.state.word } </p>
            </div>       
            </Styles>
        );
    }
}

export default WordPicker;