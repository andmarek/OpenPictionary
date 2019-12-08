import React from 'react';
import styled from 'styled-components';
import logo from '../assets/paint-board-and-brush.svg';

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
            page: 'Home'
        };
    };
    render() {
        return(
            <Styles>
                <div className="navbar">
                  <div className="image-container">
                    <img id="svg" alt="pbb" height="50px" width="50px" src={logo}/>
                  </div>
                  <ul id="nav">
                      <li> <a href="/">Home</a></li>
                      <li> <a href= "/login">Login</a></li>
                      <li> <a href="/register">Register</a></li>
                      <li> <a href="/profile">Profile</a></li>
                  </ul>
                </div>

            </Styles>
    );
    }

}

export default NavBar;
