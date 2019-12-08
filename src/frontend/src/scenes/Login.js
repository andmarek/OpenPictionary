import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import axios from 'axios';


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

  #loginTitle{
    font-family: 50px 'Roboto', sans-serif;
    text-align: center;

  }
  
`;

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username : "", password : "", loginErrors: ""}
  }

  submitLogin = (e) => {
    const {
      username,
      password
    } = this.state;

    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8080/', {
        user: {
          username: username,
          password: password
        },
      }, {
        withCredentials: true
      }).then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error: ", error)
      });
  }

  handleChange(e)   {
    this.setState({
        [e.target.name]: e.target.value
      });
  }
    render () {
        return (
          <div>
            <NavBar />
            <Styles>
                <div className = "container">
                  <form onSubmit={this.submitLogin.bind(this)}>
                  <div className="section">
                    <h1 id='loginTitle'>Login</h1>
                  </div>
                    <div className = "section">
                        <label htmlFor="email"><b>Email</b></label><br></br>
                        <input type="text" placeholder="Enter Email" name="email" required></input>
                        <br></br>
                        <label htmlFor="password"><b>Password</b></label><br></br>
                        <input id="password" className="password" type="password" placeholder="Enter Password" required></input>
                    </div>
                    <button id="submitbtn" onClick={this.submitLogin.bind(this)} className="submitbtn">Submit</button>
                  </form>
                </div>
            </Styles>
            </div>
        );
    }
}

export default Login