import React from 'react';
import styled from 'styled-components';
import iconBookMarked from '../../images/icon-bookmark.svg';
const ButtonBookMarkedStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 15px 35px 15px 35px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  border-radius: 40px 40px 40px 40px;

  img {
    display: block;
    margin-right: auto;
  }
`;

export const ButtonBookMarked = () => {
  return (
    <ButtonBookMarkedStyled>
      {/* <img src={iconBookMarked} alt="Logo" /> */}
      <span>Bookmarked</span>
    </ButtonBookMarkedStyled>
  );
};
