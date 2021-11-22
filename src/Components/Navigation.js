import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../images/avatar.png';
const Navigation = () => {
    return (
        <NavStyled>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active-class">Home</NavLink>
                    <NavLink to="/about" exact activeClassName="active-class">About</NavLink>
                    <NavLink to="/resume" exact activeClassName="active-class">Resume</NavLink>
                    <NavLink to="/portfolios" exact activeClassName="active-class">Portfolios</NavLink>
                    <NavLink to="/blogs" exact activeClassName="active-class">Blogs</NavLink>
                    <NavLink to="/contact" exact activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>&copy; 2022 Salek Mia</p>
            </footer>
        </NavStyled>
    );
};

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--border-color);

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
    }
    .avatar img {
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
    
    .nav-items {
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color);
        }
        li {
            display: block;
            a {
                display: block;
                padding: .4rem 0;
                position: relative;
                &:hover {
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: all .3s cubic-bezier(1,-0.2,.25,.95);
                    opacity: 0.21;
                }
                &:hover::before {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    footer {
        width: 100%;
        text-align: center;
        border-top: 2px solid var(--border-color);
        padding: 1rem 0;
        p {
            font-size: .8rem;
        }
    }

`;

export default Navigation;