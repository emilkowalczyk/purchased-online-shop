import styled from 'styled-components';
import { ContentWrapper } from '../../assets/styles/GlobalStyle';
import { CiSearch } from 'react-icons/ci';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  background-color: #fff;

  ${ContentWrapper} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <h1>Shop.</h1>
        <CiSearch size={25} />
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;
