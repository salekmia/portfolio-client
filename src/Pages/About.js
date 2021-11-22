import React from 'react';
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import { MainLayout } from '../Styles/Layouts';
const About = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
            </AboutStyled>
            <ImageSection></ImageSection>
        </MainLayout>
    );
};

const AboutStyled = styled.section`
    
`;
export default About;