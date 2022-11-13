import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

const CardDiv = styled.div`
  margin-top: 25px;
  border: solid 1px #66666618;
  border-radius: 5px;
  padding: 15px;
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  span {
    font-weight: bold;
    color: hsl(176, 50%, 47%);
  }
`;

const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    text-align: center;
    display: flex;
    justify-content: baseline;

    p {
      margin-left: 8px;
    }
  }
`;

export const Card = ({
  id,
  titulo,
  textoDescripcion,
  precio,
  totalR,
  showModal,
  setShowModal,
  selectId,
  setSelectId,
}) => {
  return (
    <CardDiv>
      <TitleCard>
        <h1>{titulo}</h1>
        <span> Piedge ${precio} or more</span>
      </TitleCard>

      <p>{textoDescripcion}</p>

      <FooterCard>
        <div>
          <h1> {totalR}</h1> <p>left</p>
        </div>
        <Button
          idCard={id}
          showModal={showModal}
          setShowModal={setShowModal}
          selectId={selectId}
          setSelectId={setSelectId}
          totalR={totalR}
          texto="Select Reward"
        />
      </FooterCard>
    </CardDiv>
  );
};
