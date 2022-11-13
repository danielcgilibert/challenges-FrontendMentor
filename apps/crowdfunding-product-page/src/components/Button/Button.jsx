import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  -webkit-border-radius: 40px 40px 40px 40px;
  -moz-border-radius: 40px 40px 40px 40px;
  border-radius: 40px 40px 40px 40px;

  background-color: ${(props) => (props.texto ? `hsl(176, 50%, 47%)` : `gray`)};
  color: white;
  padding: 15px 35px 15px 35px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;

  &:hover {
    background-color: hsl(176, 72%, 28%);
  }

  ${(props) => {
    if (props.disabled)
      return `
      &:hover{
        background-color: gray;

      }
      cursor: not-allowed;

      `;
  }}
`;

export const Button = ({
  idCard,
  texto,
  showModal,
  setShowModal,
  selectId,
  setSelectId,
  totalR,
}) => {
  const handleModal = () => {
    if (totalR === 0 || idCard === undefined) {
      setSelectId(null);
    } else {
      setSelectId(idCard);
    }
    setShowModal(true);
  };

  return texto ? (
    <ButtonStyled onClick={handleModal} texto>
      {texto}
    </ButtonStyled>
  ) : (
    <ButtonStyled disabled>Out of stock </ButtonStyled>
  );
};
