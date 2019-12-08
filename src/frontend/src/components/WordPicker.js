import React from 'react';
import styled from 'styled-components';

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
`;

class WordPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <Styles>
            <div className="wrapper">
                <h3> You need to draw: </h3>
                <h4> [Insert word from DB] </h4>
            </div>       
            </Styles>
        );
    }
}

export default WordPicker;