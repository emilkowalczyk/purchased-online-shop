import styled from 'styled-components';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { CiBellOn, CiHeart, CiShoppingCart } from 'react-icons/ci';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 25px 24px;
  background-color: ${({ theme }) => theme.color.base};
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-size: 30px;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 3px;

    @media (min-width: 768px) {
      margin: 0 10%;
    }
  }
`;

const StyledMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 18px;
  justify-content: space-between;
  cursor: pointer;
  z-index: 999;
  margin-right: 15px;

  span {
    width: 24px;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    transition: 0.15s;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? ' translateY(7px) rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? ' translateY(-8px) rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const DesktopNavigation = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-size: 30px;
    gap: 15px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <StyledHeader>
      <Sidebar isOpen={isOpen} />
      <StyledHeaderWrapper>
        <StyledMenuIcon isOpen={isOpen} onClick={handleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </StyledMenuIcon>
        <h1>Store</h1>

        <input type='text' placeholder='Search for...' />
        <DesktopNavigation>
          <CiShoppingCart />
          <CiHeart />
          <CiBellOn />
        </DesktopNavigation>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
