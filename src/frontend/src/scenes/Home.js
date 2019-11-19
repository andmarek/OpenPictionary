import React from 'react'

/* Components */

/* Navbar */
import NavBar from '../components/NavBar.js'
import StartButton from '../components/StartButton.js'

import styled, {createGlobalStyle} from 'styled-components'
/* Styles */
const GlobalStyle = createGlobalStyle`
    body {
        background: red;
    }
`;

const Styles = styled.div`
    .body-wrapper {
        background: #94cbca;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }
    .page-wrapper {
        height: 100%;
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
         <Styles>
             <div id="page-wrapper">
                 <NavBar />
                 <div id="body-wrapper">
                        <StartButton id="button"/>
                 </div>
             </div>
         </Styles>
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
