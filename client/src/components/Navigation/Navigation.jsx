import styled from 'styled-components';
import { CiHome, CiHeart, CiShoppingCart, CiBellOn } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 64px;
  background-color: ${({ theme }) => theme.color.base};
  box-shadow: 0 0 10px #ccc;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: inherit;
    height: inherit;

    li {
      transition: 0.15s;

      a {
        color: black;

        &.active {
          color: #fff;
        }
      }
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <ul>
          <li>
            <NavLink to={'/'}>
              <CiHome size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/cart'}>
              <CiShoppingCart size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/favorites'}>
              <CiHeart size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to={'/profile'}>
              <CiBellOn size={30} />
            </NavLink>
          </li>
        </ul>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Navigation;
