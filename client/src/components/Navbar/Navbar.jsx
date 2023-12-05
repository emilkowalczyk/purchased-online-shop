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
import Search from '../Search/Search';
import Input from '../Input/Input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMobileMenu = () => setIsMenuOpen(false);
  const handleCart = () => setIsCartOpen(!isCartOpen);
  const handleSearch = () => setIsSearchOpen(!isSearchOpen);

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
            <Input
              type='text'
              placeholder='Search'
              label={<IoSearchOutline />}
            />
          </StyledSearchForm>
          <ul>
            <li>
              <NavLink to={'/'} onClick={handleCloseMobileMenu}>
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} onClick={handleCloseMobileMenu}>
                About Us
              </NavLink>
            </li>
          </ul>
          <p>My account</p>
        </StyledNav>
        <StyledLogo to='/' onClick={handleCloseMobileMenu}>
          purchased.
        </StyledLogo>
        <StyledNavIcons>
          <li onClick={handleSearch}>
            <IoSearchOutline />
          </li>
          <li>
            <IoPersonOutline />
          </li>
          <li
            onClick={() => {
              handleCart(), handleCloseMobileMenu();
            }}
          >
            <IoCartOutline />
          </li>
        </StyledNavIcons>
        {isCartOpen && <Cart handleCart={handleCart} />}
        {isSearchOpen && <Search handleSearch={handleSearch} />}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Navbar;
