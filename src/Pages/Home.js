import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
const Home = () => {
    return (
        <HomeStyled>
            <div className="p-particles-js">
                <Particle></Particle>
            </div>
        </HomeStyled>
    );
};

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
`;

export default Home;