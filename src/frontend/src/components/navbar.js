import React from 'react';
import styled from 'styled-components';
import logo from '../assets/paint-board-and-brush.svg';
//remember to add styled components somewhere
const Styles = styled.div `
    .navbar {
        display: flex;
        padding: 1px;
        width: 99%;
        justify-content: space-between;
        background-color: #D68266;
        margin: 0;
        padding: 10px;
    }

    #nav {
        list-style: none;
        float: left;
    }
    #nav li {
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        float: left;
        padding: 8px 15px;
        display: block;
        text-decoration: none;
    }
    #nav li a {

    }

    p {
        #FFFFFF;
        margin: 0px;
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
                    <img src={logo} width="50px" height="50px" alt="paint brush and board"/>
                  </div>
                  <ul id="nav">
                      <li a href="/">Home</li>
                      <li a href= "">Login</li>
                      <li a href=" ">Register</li>
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