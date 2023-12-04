import styled, { keyframes } from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

const slideCart = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideCartDesktop = keyframes`
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

const StyledCart = styled.div`
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

const StyledCartContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 99vh;
  background-color: #fff;
  bottom: 0;
  right: 0;
  border-radius: 12px 12px 0 0;
  animation-name: ${slideCart};
  animation-duration: 0.4s;
  animation-fill-mode: both;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    position: relative;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ddd;
    }

    h2 {
      font-size: 16px;
    }
  }

  section {
    padding: 30px 24px;

    div {
      display: flex;
      border: 1px solid #ddd;
      padding: 15px 24px;

      img {
        width: 50%;
        height: 128px;
        background-color: #ddd;
      }

      div {
        display: flex;
        flex-direction: column;
        border: none;
      }
    }
  }

  @media (min-width: 460px) {
    position: absolute;
    max-width: 450px;
    top: 10px;
    right: 10px;
    bottom: 10px;
    height: auto;
    background-color: #fff;
    border-radius: 12px;
    animation-name: ${slideCartDesktop};
    animation-duration: 0.4s;
    animation-fill-mode: both;
  }
`;

const StyledCloseCartIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 8px;
  font-size: 25px;
`;

const Cart = ({ handleCart }) => {
  return (
    <StyledCart>
      <StyledCartContainer>
        <header>
          <h2>YOUR CART</h2>
          <StyledCloseCartIcon onClick={handleCart}>
            <IoCloseOutline />
          </StyledCloseCartIcon>
        </header>
        <section>
          <div>
            <img src='' alt='' />
            <div>
              <h3>iPhone 15 Pro</h3>
              <p>1300$</p>
            </div>
          </div>
        </section>
      </StyledCartContainer>
    </StyledCart>
  );
};

export default Cart;
