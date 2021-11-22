import React from 'react';
import styled from 'styled-components';
import about from '../images/about.png';
import PrimaryButton from './PrimaryButton';
const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={about} alt="avatar" />
            </div>
            <div className="right-content">
                    <h2>I am <span>Salek Mia</span></h2>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit magnam consequuntur doloribus, aliquid iure similique hic qui repellat eum cumque saepe repudiandae ration.</p>
                </div>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name </p>
                        <p>Age </p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location </p>
                        <p>Service </p>
                    </div>
                    <div className="info">
                        <p> : Mohammad Salek Mia</p>
                        <p> : 18.7 years</p>
                        <p> : Bangladeshi</p>
                        <p> : Bangla, English</p>
                        <p> : Bhairab, Dhaka, Banladesh</p>
                        <p> : Web Development</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'}></PrimaryButton>
            </div>
        </ImageSectionStyled>
    );
};

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    .left-content {
        width: 100%;
        img {
            width: 90%;
            object-fit: cover;
            border-radius: 3px;
        }
    }
    .right-content {
        h2 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                margin-right: 3rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p {
                    padding: .5rem 0;
                }
            }
        }
    }
`;

export default ImageSection;