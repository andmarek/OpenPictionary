import React from 'react';
import styled from 'styled-components';

//remember to add styled components somewhere
const Styles = styled.div`
    .navbar {
        display: flex;
        padding: 1px;
        float: left;
        width: 99%;
        justify-content: space-between;
        background-color: #D68266;
        margin: 0;
        padding: .5em;
    }

    p {
        #FFFFFF;
    }

`;

export const NavBar = () => (
            <Styles>
                <div class="navbar">
                  <ul>
                     <p> test </p>
                  </ul> </div>
            </Styles>
)