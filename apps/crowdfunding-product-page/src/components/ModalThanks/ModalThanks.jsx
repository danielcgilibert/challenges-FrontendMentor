import React from 'react';
import styled from 'styled-components';
import check from '../../images/icon-check.svg';
import { size } from '../../styles/devices';

const ModalThanksStyled = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 30%;
  height: 30%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  padding: 25px;
  text-align: center;

  h1 {
    font-size: 25px;
    margin: 20px;
  }

  p {
    color: gray;
  }

  @media (max-width: ${size.mobileL}) {
    width: 70%;
    height: auto;
  }
`;

const Button = styled.button`
  border-radius: 40px 40px 40px 40px;
  background-color: hsl(176, 50%, 47%);
  color: white;
  padding: 15px 35px 15px 35px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  margin-top: 25px;
`;
export const ModalThanks = ({ showModalThanks, setshowModalThanks }) => {
  return (
    <ModalThanksStyled>
      <ModalContent>
        <img src={check} alt="React Logo" />
        <h1>Thanks for your support!</h1>
        <p>
          Your pledge brings us one step closer to sharing MasterCraft Bamboo
          Monitor Riser worlwide. You will get an email once our campaign is
          completed.
        </p>
        <Button onClick={() => setshowModalThanks(!showModalThanks)}>
          Got it!
        </Button>
      </ModalContent>
    </ModalThanksStyled>
  );
};
