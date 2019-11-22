import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import pb from '../assets/paintbrush.svg';
/* Components */

/* Navbar */
import NavBar from '../components/NavBar.js'
import StartButton from '../components/StartButton.js'

/* Styles */
const GlobalStyle = createGlobalStyle `
    body {
        background: #94cbca;
    }
`;

const StartButtonStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const TextStyle = styled.div`
    #openPictionaryText {
        font-family: 50px 'Roboto', sans-serif;
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 60px;
        margin-bottom: 0px;
    }
    #dayf {
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 30px;
    }
    p {
        text-align: center;
    }
`;
const ImageStyles = styled.div `
    img {
        float: right;
        align: right;
    }
`;
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <div>
            <GlobalStyle />
                <NavBar />
                <div>
                <ImageStyles>
                     
                </ImageStyles>
                <TextStyle>
                     <p id="openPictionaryText"> OpenPictionary <img id="svg" alt="pbb" height="50px" width="50px"alight='right' src={pb}/></p>
                     <p id='dayf'> Draw against your friends!</p>
                </TextStyle>
                </div>

                <StartButtonStyle>
                    <StartButton id="button"/>
                </StartButtonStyle>
            </div>
        );
    }
}
/*
const Home = () => (
   render() {
       return (
    <div>
        <NavBar />
    </div>


}
)
*/
export default Home;
