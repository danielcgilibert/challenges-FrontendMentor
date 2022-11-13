import React from 'react';
import { Card } from '../Card/Card';
import styled from 'styled-components';
import { size } from '../../styles/devices';

const List = styled.div`
  background-color: white;
  height: 100%;
  width: 40%;
  border-radius: 5px;
  padding: 25px;
  @media (max-width: ${size.mobileL}) {
    width: 80%;
    margin: 15px 0 15px 0;
  }
`;

const InfoProject = styled.div`
  strong {
    margin-bottom: 15px;
    display: inline-block;
  }
  p {
    color: hsl(0, 0%, 48%);
    line-height: 30px;
    margin-bottom: 15px;
  }
`;

export const ListCards = ({
  showModal,
  setShowModal,
  rewards,
  selectId,
  setSelectId,
}) => {
  return (
    <List>
      <InfoProject>
        <strong>About this project</strong>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>

        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        {rewards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              titulo={card.title}
              precio={card.price}
              totalR={card.totalRewards}
              textoDescripcion={card.description}
              showModal={showModal}
              setShowModal={setShowModal}
              selectId={selectId}
              setSelectId={setSelectId}
            />
          );
        })}
      </InfoProject>
    </List>
  );
};
