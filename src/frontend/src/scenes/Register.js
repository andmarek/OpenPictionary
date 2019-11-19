import React from 'react';
import styled from 'styled-components';

const Styles = styled.div `

.container{ padding: 16px; }

input[type=text], input[type=password] {
    width: 100%;
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


class Register extends React.Component{


    checkValid() {
        var psw = document.getElementById("password");
        var rpsw = document.getElementById("repeatPassword");

        if(psw.value !== rpsw.value){
          alert("Passwords do not match, try again.")
        }
        else{
          alert("Passwords match.")
        }
      
    }

    render () {
        return ( 
            <Styles>
                <div className = "container">

                  <div className = "section">
                    <h1>Register</h1>
                    <p>Provide the following to create an account.</p>
                  </div>

                  <div className = "section">
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>

                    <label htmlFor="password"><b>Password</b></label>
                    <input id="password" className="password" type="password" placeholder="Enter Password" required></input>

                    <label htmlFor="repeatPassword"><b>Repeat Password</b></label>
                    <input  id="repeatPassword" type="password" placeholder=" Repeat Password" required></input>
                  </div>
                    <button id="submitbtn" onClick={() =>{this.checkValid()}} className="submitbtn">Submit</button>
                  
                </div>
            </Styles>


        );
    }
}

export default Register