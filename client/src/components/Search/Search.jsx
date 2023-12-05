import styled, { keyframes } from 'styled-components';
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const slideSearch = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSearch = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 350px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.15s;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: both;
`;

const StyledSearchContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 460px;
  height: auto;
  background-color: #fff;
  bottom: 0;
  right: 0;
  top: 0;
  animation-name: ${slideSearch};
  animation-duration: 0.4s;
  animation-fill-mode: both;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    position: relative;
    width: 100%;

    h2 {
      font-size: 16px;
    }
  }

  section {
    padding: 30px 24px;
  }
`;

const StyledCloseSearchIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 8px;
  font-size: 25px;
`;

const Search = ({ handleSearch }) => {
  return (
    <StyledSearch onClick={handleSearch}>
      <StyledSearchContainer>
        <header>
          <StyledCloseSearchIcon onClick={handleSearch}>
            <IoCloseOutline />
          </StyledCloseSearchIcon>
        </header>
        <section>
          <Input type='text' placeholder='Search' label={<IoSearchOutline />} />
        </section>
      </StyledSearchContainer>
    </StyledSearch>
  );
};

export default Search;

Search.propTypes = {
  handleSearch: PropTypes.func,
};
