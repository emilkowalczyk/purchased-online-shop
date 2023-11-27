import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: max-content;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.base};
  box-shadow: 0 0 10px #0063ad;
  padding: 100px 24px;
  display: flex;
  flex-direction: column;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: 0.15s;
`;

const Sidebar = ({ isOpen }) => {
  return (
    <StyledSidebar isOpen={isOpen}>
      <div></div>
    </StyledSidebar>
  );
};

export default Sidebar;
