import styled from 'styled-components';
import { ContentWrapper } from '../../assets/styles/GlobalStyle';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  background-color: orange;
`;

const StyledHeaderWrapper = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 10px;
  }

  input {
    border: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 10px 5px;
    border-radius: 8px;
  }
`;

const SearchIcon = styled.div``;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleShowSearchbox = () => setIsActive(true);
  const handleHideSearchbox = () => setIsActive(false);

  return (
    <StyledHeader>
      <ContentWrapper>
        <CiMenuFries size={25} />

        <StyledHeaderWrapper>
          <h1>Online Store</h1>
          <input type='text' placeholder='Search for...' />
        </StyledHeaderWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;
