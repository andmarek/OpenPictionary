import React from 'react';
import styled from 'styled-components';
//import InlineSVG from 'svg-inline-react';
import logo from '../assets/paint-board-and-brush.svg';
// Use with loader ?
//<InlineSVG src={require("svg-inline-loader")} />
//const Icon = ({ fill }) => <InlineSVG src="src/assets/paint-board-and-brush.svg" />

//remember to add styled components somewhere
const Styles = styled.div `
    .image-container {
        display: block;
        margin: 5px;
    }
    .navbar {
        display: flex;
        padding: 1px;
        width: 99.9%; //check this at some point
        justify-content: space-between;
        background-color: #D68266;
        margin: 0;
    }

    #nav {
        list-style: none;
        float: left;
        margin-bottom = 0px;
    }
    #nav li {
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        float: left;
        padding: 8px 10px;
        display: block;
        text-decoration: none;
    }
    #nav li a {

    }

    p {
        #FFFFFF;
        margin: 0px;
    }

    #pbb {
        fill: white;
    }

`;
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return(
            <Styles>
                <div class="navbar">
                  <div class="image-container">
                    <img id="svg" alt="pbb" height="50px" width="50px" src={logo}/>
                  </div>
                  <ul id="nav">
                      <li> <a> href="/">Home </a> </li>
                      <li a href= "/login">Login</li>
                      <li a href="/register">Register</li>
                  </ul> </div>
            </Styles>
    );
    }

}

export default NavBar;
/*
const NavBar = () => (
            <Styles>
                <div class="navbar">
                  <div class="image-container">
                    <img src={logo} width="50px" height="50px" alt="paint brush and board"/>
                  </div>
                  <ul id="nav">
                      <li a href=" ">Home</li>
                      <li a href= "">Login</li>
                      <li a href=" ">Register</li>
                  </ul> </div>
            </Styles>
)

export default NavBar;
*/
