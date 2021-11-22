import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import React from 'react';
import styled from 'styled-components';
import MyParticle from '../Components/MyParticle';
const Home = () => {
    return (
        <HomeStyled>
            <div className="particle-con">
                <MyParticle></MyParticle>
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Salek Mia</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio in odit iusto voluptate officiis dolores! Nemo consequatur quo aspernatur.</p>
                <div className="icons">
                    <a href="https://www.facebook.com/salekalways" target="_blank" className="icon i-facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/salekalways/" target="_blank" className="icon i-linkedin" rel="noreferrer">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/salekmia" target="_blank" className="icon i-github" rel="noreferrer">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomeStyled>
    );
};

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .my-particles-js {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid var(--border-color);
            border-radius: 50%;
            transition: all .3s ease;
            &:not(:last-child) {
                margin-right: 1rem;
            }
            &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                cursor: pointer;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-linkedin {
            &:hover{
                border: 2px solid #0e76a8;
                color: #0e76a8;
            }
        }
        .i-github {
            &:hover{
                border: 2px solid #5f4687;
                color: #5f4687;
            }
        }
    }
`;

export default Home;