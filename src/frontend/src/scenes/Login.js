import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import axios from 'axios';

const Styles = styled.div `

.container{ 
    display: flex; 
    padding: 16px; 
    justify-content: center;
  }

input[type=text], input[type=password] {
    width: 70%;
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
    width:100%;
    opacity: 0.9;
  }

  .submitbtn:hover {
    opacity: 1;
  }

  #loginTitle{
    font-family: 50px 'Roboto', sans-serif;
    text-align: center;

  }
  
`;

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email : "", 
      myPassword : "", 
  };

  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
  };

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
        localStorage.setItem('userToken', response.data)
        return response.data;
      })
      .catch(error => {
        console.log("login error: ", error)
      });
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.name, "dogs");
  }
/* Whatever */

  onSubmit (e) {
    e.preventDefault()  
    const User = {
      email: this.state.email,
      password: this.state.password, 
    }
    /* Submit the request */
    axios.post('localhost:8080/login', {
      email: User.email,
      password: User.password
    }).then(res => {
      localStorage.setItem('userToken');
      return res.data;
    }).catch(err => {
      console.log(err);
    }).then( res => {
      if(res) {
        this.props.history.push('/profile');
      }
    })

  }
  // on submit end 
  
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
                        <input value={this.state.email} onChange={this.onChange} type="text" placeholder="EMAIL" name="email" required></input>
                        <br></br>
                        <label htmlFor="password"><b>Password</b></label><br></br>
                        <input name="myPassword" value={this.state.password} onChange={this.onChange}  id="password" className="password" type="password" placeholder="PASSWORD" required></input>
                    </div>
                    <button id="submitbtn" onClick={this.onSubmit} className="submitbtn">Submit</button>
                  </form>
                </div>
            </Styles>
            </div>
        );
    }
}

export default Login