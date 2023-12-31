import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.light};
  padding: 0 24px;
  min-width: 350px;

  @media (min-width: 768px) {
    padding: 0 36px;
  }

  @media (min-width: 1024px) {
    padding: 0 56px;
  }
`;

export const StyledHeaderContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 16px 0;
  height: 74px;

  &::before {
    content: '';
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.color.extra};
  }

  @media (min-width: 768px) {
    height: auto;
  }

  @media (min-width: 1024px) {
    height: auto;
  }
`;

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 74px;
  left: 0;
  background-color: #fff;
  padding: 32px 24px;
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;

  li {
    margin: 12px 0;
    display: flex;
    width: 100%;

    a {
      width: 100%;
    }
  }

  p {
    position: relative;
    text-align: center;
    margin-top: 70px;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.color.extra};
    }
  }

  @media (min-width: 768px) {
    display: block;
    width: auto;
    height: auto;
    position: static;
    padding: 0;
    background-color: transparent;

    p {
      display: none;
    }

    ul {
      display: flex;

      li {
        font-size: 14px;
        display: block;
        width: auto;
        margin-right: 30px;
        overflow-x: hidden;
        padding: 5px 0;

        a {
          width: auto;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #000;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s;
          }

          &:hover::before {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
`;

export const StyledSearchForm = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledMobileMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 18px;
  height: 15px;
  justify-content: space-between;

  span {
    width: inherit;
    height: 2px;
    background-color: #000;
    transition: 0.3s;

    &:nth-child(1) {
      transform: ${({ $isMenuOpen }) =>
        $isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ $isMenuOpen }) =>
        $isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: -4px;
  font-size: 2rem;
  color: #edcb94;
`;

export const StyledNavIcons = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  font-size: 24px;

  li {
    margin-left: 10px;
    cursor: pointer;
  }

  li:nth-child(1),
  li:nth-child(2) {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
