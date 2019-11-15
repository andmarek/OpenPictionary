import React from 'react'
import styled from 'styled-components';

/* Components */
//navbar
import NavBar from '../components/navbar';

/* Styles */
const Styles = styled.div`
    background: #94cbca;
    display: flex;
    width: 100%; 
    justify-content: center;
`;

export const Home = () => (
    <Styles>
            <NavBar />
          <h2> What's poppin' </h2>
    </Styles>
)