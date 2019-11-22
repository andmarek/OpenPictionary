import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.js'


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

  h1 {
    text-align: center;
  }
  
`;


class Register extends React.Component{

    constructor() {
      super();
      this.updateVars();
    }

    updateVars() {
      this.psw = document.getElementById("password");
      this.rpsw = document.getElementById("repeatPassword");
      this.userEmail = document.getElementById("email");
      this.username = document.getElementById("username");
    }


    checkValid() {
      
        this.updateVars();

        if(this.psw.value !== this.rpsw.value){
          alert("Passwords do not match, try again.\nPassword: " + this.psw.value + "\nRepeat Password: " + this.rpsw.value);
        }
        else{
          this.sendData();
        }
      
    }

    sendData() {

      this.updateVars();

      var request = new XMLHttpRequest();

      request.addEventListener('load', () => {
        alert(request.responseText);
      })

      //request.open('POST', URl)

      request.send(JSON.stringify({
        email: this.userEmail.value,
        username: this.username.value,
        password: this.psw.value
      }))
    }

    render () {
        return ( 

          <div>
            <NavBar />


            <Styles>

                

                <div className = "container">

                  <div classNAme="section">
                    <h1>Register</h1>
                  </div>


                  <div className = "section">
                    <label htmlFor="email"><b>Email</b></label>
                    <input id="email" type="text" placeholder="Enter Email" name="email" required></input>

                    <label htmlFor="username"><b>Username</b></label>
                    <input id="username" type="text" placeholder="Enter Username" name="username" required></input>

                    <label htmlFor="password"><b>Password</b></label>
                    <input id="password" className="password" type="password" placeholder="Enter Password" required></input>

                    <label htmlFor="repeatPassword"><b>Repeat Password</b></label>
                    <input  id="repeatPassword" type="password" placeholder=" Repeat Password" required></input>
                  </div>
                    <button id="submitbtn" onClick={() =>{this.checkValid()}} className="submitbtn">Submit</button>
                  
                </div>
            </Styles>
            </div>

        );
    }
}

export default Register