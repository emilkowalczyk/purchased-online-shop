import {
  IoCartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledMobileMenuIcon,
  StyledNav,
  StyledNavIcons,
  StyledSearchForm,
} from './Navbar.styles';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMobileMenu = () => setIsMenuOpen(false);
  const handleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledMobileMenuIcon
          onClick={handleMobileMenu}
          $isMenuOpen={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </StyledMobileMenuIcon>
        <StyledNav $isMenuOpen={isMenuOpen}>
          <StyledSearchForm>
            <input type='text' placeholder='Search' />
            <button onClick={handleMobileMenu}>
              <IoSearchOutline />
            </button>
          </StyledSearchForm>
          <ul>
            <li>
              <NavLink to={'/'} onClick={handleCloseMobileMenu}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} onClick={handleCloseMobileMenu}>
                About
              </NavLink>
            </li>
          </ul>
          <p>My account</p>
        </StyledNav>
        <StyledLogo to='/'>purchased.</StyledLogo>
        <StyledNavIcons>
          <li>
            <IoSearchOutline />
          </li>
          <li>
            <IoPersonOutline />
          </li>
          <li onClick={handleCart}>
            <IoCartOutline />
          </li>
        </StyledNavIcons>
        {isCartOpen && <Cart handleCart={handleCart} />}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Navbar;
