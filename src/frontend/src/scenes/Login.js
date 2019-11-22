import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';


const Styles1 = styled.div`
    background: #94cbca;
    display: flex;
    width: 100%;
    justify-content: center;

    #header {
        border-radius: 10px;
        width: 100px;
        height: 50px;
        background-color: #D68266;
        justify-content: center;
     }

     p {
        margin: auto;
        color: white;
        font-family: 'Roboto', sans-serif;
        justify-content: center;
        display: flex;
    }
`;


const Styles = styled.div `

.container{ padding: 16px; }

input[type=text], input[type=password] {
    width: 98%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;

  }
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }
  
  
  /* Set a style for the submit/register button */
  .submitbtn {
    background-color: #D68266;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .submitbtn:hover {
    opacity:1;
  }
  
`;

class Login extends React.Component{


    getData(){

      return;
    }

    checkValid() {

      return;
    }



    render () {
        return (

<div>

            <NavBar />

            <Styles1>
              <div id="header">
                <p>Login</p>
              </div>
            </Styles1>

            <Styles>

                


                <div className = "container">


                    <div className = "section">
                        <label htmlFor="email"><b>Email</b></label><br></br>
                        <input type="text" placeholder="Enter Email" name="email" required></input>

                        <br></br>

                        <label htmlFor="password"><b>Password</b></label><br></br>
                        <input id="password" className="password" type="password" placeholder="Enter Password" required></input>
                    </div>

                    <button id="submitbtn" onClick={() =>{ this.checkValid() }} className="submitbtn">Submit</button>

                </div>
            </Styles>

            </div>
        );
    }
}

export default Login