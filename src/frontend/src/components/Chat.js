import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    width: 100%;
    border-style: solid;
    border-width: 2px;
    border-color: #BC909D;

`;

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render () {
        return (
            <Styles>
                <h3> Chat </h3>
                <p> this is a chat application</p>
            </Styles>
        );
    };
}

export default Chat;