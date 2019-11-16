import React from 'react'
import styled from 'styled-components';

/* Components */

/* Navbar */
import NavBar from '../components/NavBar.js';

/* Styles */
const Styles = styled.div`
    background: #94cbca;
    display: flex;
    width: 100%;
    justify-content: center;
`;
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render () {
        return (
            <div>
                <NavBar />
                <Styles>
                     <h2> What's poppin' </h2>
                </Styles>       
            </div>
        );
    }
}
/*
const Home = () => (
   render() { 
       return (
    <div>
        <NavBar />
    </div>    
    

}
)
*/
export default Home;
