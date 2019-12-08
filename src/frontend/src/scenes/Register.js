import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.js'
import axios from 'axios'

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
  .danger-error {
      color: red;
      margin-left: 5px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
`;


class Register extends React.Component{
    constructor(props) {
      super(props);
      this.state = { username : "", email : "", password : "", errors: []};
    }
    
    submitHandler = e => {
      e.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:8080/user', this.state)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }
    submitRegister(e) {
      if(this.state.username === "") {
        this.showValidationErr("username", "Username not valid.");
      } if (this.state.email === "") {
        this.showValidationErr("email", "Email not valid.");
      } if (this.state.password === "") {
        this.showValidationErr("password", "Password not valid.");
      }
    } 
    onUsernameChange(e) {
      this.setState({username: e.target.value}) ;
    }
    onEmailChange(e) {
      this.setState({email: e.target.value}) ;
    }
    onPasswordChange(e) {
      this.setState({password: e.target.value}) ;
    }

    showValidationErr(elm, msg) {
      this.setState( (prevState) => ({ errors: [... prevState.errors, {elm, msg}] } ));
    }
     clearValidationErr(elm) {
      this.setState((prevState) => {
        let newArr = []
        for(let err of prevState.errors) {
          if (elm != err.elem) {
            newArr.push(err);
          }
        }
        return {errors:newArr};
       });
     }

    render () {
      let usernameErr = null, passwordErr = null, emailErr = null;

      const { username, email, password} = this.state;
     /* 
      for (let err of this.state.errors) {
        if(err.elm == "username") {
          usernameErr = err.msg;
        } 
        if (err.elm == "password") {
          passwordErr = err.msg;
        } 
        if (err.elm == "email") {
          emailErr = err.msg;
        }
      }*/

        return ( 
          <div>
            <NavBar />
            <Styles>
                <div className = "container">
                  <div classNAme="section">
                    <h1>Register</h1>
                  </div>
                  <form onSubmit = {this.submitHandler}  >
                  <div className = "section">
                    <label htmlFor="email"><b>Email</b></label>
                    <small className="danger-error">{emailErr ? emailErr : "" }</small>
                    <input id="email" type="text" placeholder="Enter Email" name="email" required
                    onChange={this.onEmailChange.bind(this)}></input>

                    <label htmlFor="username"><b>Username</b></label>
                    <small className="danger-error">{emailErr ? emailErr : "" }</small>
                    <input id="username" type="text" placeholder="Enter Username" name="username" required
                    onChange={this.onUsernameChange.bind(this)}></input>

                    <label htmlFor="password"><b>Password</b></label>
                    <small className="danger-error">{passwordErr ? passwordErr : "" }</small>
                    <input id="password" className="password" type="password" placeholder="Enter Password" required
                    onChange={this.onPasswordChange.bind(this)}></input>
                  </div>
                    <button id="submitbtn" onClick={this.submitRegister.bind(this)} className="submitbtn">Submit</button>
                  </form>
                </div>

            </Styles>
            </div>
        );
    }
}

export default Register;