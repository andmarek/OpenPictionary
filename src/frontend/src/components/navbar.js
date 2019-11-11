import React from 'react';
import styled from 'styled-components';

//remember to add styled components somewhere
const Styles = styled.div`
    .nav {
        background-color: #222;
    }
`;

export const NavBar = React.createClass({
    render() {
        return (
            <Styles>
                <div class="nav">
                  <ul>
                     <p> test </p>
                  </ul> </div>
            </Styles>
        )
    }
});

