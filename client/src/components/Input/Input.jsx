import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.extra};
  border-right: none;
  width: 100%;
  padding: 16px;
  outline: none;
  border-radius: 0;
`;

const StyledButton = styled.button`
  display: block;
  aspect-ratio: square;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.color.extra};
  border-left: none;
  padding: 0 16px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  :active {
    transform: scale(0.9);
  }
`;

const Input = ({ type, placeholder, label }) => {
  return (
    <StyledForm>
      <StyledInput type={type} placeholder={placeholder} />
      <StyledButton>{label}</StyledButton>
    </StyledForm>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.any,
};
