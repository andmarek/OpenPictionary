
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

p {
    width: 98%;
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

  h1{
      text-align: center;
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
            <div>

                <NavBar />
                
                    


                <Styles>
                    <div className = "container">

                    <div classNamem="section">
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
            </div>
        );

    }
}

export default Profile