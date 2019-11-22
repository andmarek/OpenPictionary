
import React from 'react';
import styled from 'styled-components';


const Styles = styled.div `

.container{ padding: 16px; }

p {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
  
  p {
    background-color: #ddd;
    outline: none;
  }
  
`;

class Profile extends React.Component{


    constructor (){
        super();
        this.passwordToDisplay = "";
        this.emailToDisplay = "";
        this.usernameToDisplay = "";
    }

    getData() {

        var request = new XMLHttpRequest();

        request.addEventListener('load', () => {
            alert(request.responseText);
        })

        //request.open('GET', URL);

        //this.passwordToDisplay = 
        //this.emailToDisplay = 
        //this.usernameToDisplay = 

        request.send();
    }

    render () {

        

        return (
            <Styles>
                <div className = "container">

                  <div className = "section">
                    <h1>Profile</h1>
                  </div>

                  <div className = "section">
                    <label htmlFor="email"><b>Email</b></label>
                    <p>{ this.emailToDisplay }</p>

                    <label htmlFor="username"><b>Username</b></label>
                    <p>{ this.usernameToDisplay }</p>

                    <label htmlFor="password"><b>Password</b></label>
                    <p>{ this.passwordToDisplay }</p>

                  </div>
                  
                </div>
            </Styles>
        );

    }
}

export default Profile