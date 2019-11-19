import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    p {
        color: white;
        font-family: 'Roboto', sans-serif;
        justify-content: center;
        display: flex;
    }

    #startbutton {
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        background-color: #D68266;
    }
`;
class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render () {
        return (
            <Styles>
               <div id="startbutton">
                  <p>Start Drawing</p>
               </div>
            </Styles>
        );
    }
}

export default StartButton;

