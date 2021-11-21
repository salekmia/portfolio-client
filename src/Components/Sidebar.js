import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <SidebarStyled>
            <Navigation></Navigation>
        </SidebarStyled>
    );
};

const SidebarStyled = styled.div`
    position: fixed;
    width: 16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color)

`;

export default Sidebar;