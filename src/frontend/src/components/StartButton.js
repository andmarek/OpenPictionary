import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    p {
        margin: auto;
        color: white;
        font-family: 'Roboto', sans-serif;
        justify-content: center;
        display: flex;
        vertical-align: middle;
        top: 50%;
        transform: translateY(-50%);
        position: relative;
    }

    #startbutton {
       border-radius: 10px;
       width: 200px;
       height: 100px;
       background-color: #D68266;
    }
    #sd {
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
    }
    a {
        text-decoration: none;
    }
    a:link {
        color: white;
    }
    a:visited {
        color: white;
        text-decoration: none;
    }
    a:active {
        color: white;
    }
    a:hover {
        color: #815D5D;
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
                  <p id="sd"><a href="/draw"> Start Drawing </a></p>
               </div>
            </Styles>
        );
    }
}

export default StartButton;

