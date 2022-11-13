import React from 'react';
import styled from 'styled-components';
import iconClose from '../../images/icon-close-modal.svg';
import { CardModal } from '../CardModal/CardModal';
import { size } from '../../styles/devices';

const ModalStyled = styled.div`
  position: fixed;
  z-index: 1;
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
  width: 40%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  padding: 25px;

  @media (max-width: ${size.mobileL}) {
    width: 70%;
    height: 100%;
    overflow-y: scroll;
  }

  p {
    color: gray;
    margin-top: 15px;
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: black;
  }
`;

const HeaderModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 25px;
`;

export const Modal = ({ setShowModal, rewards, selectId, setSelectId }) => {
  return (
    <ModalStyled>
      <ModalContent>
        <HeaderModal>
          <img
            onClick={() => setShowModal(false)}
            src={iconClose}
            alt="React Logo"
          />
        </HeaderModal>
        <h1>Back this project</h1>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {rewards.map((card) => {
          return (
            <CardModal
              key={card.id}
              id={card.id}
              titulo={card.title}
              precio={card.price}
              totalR={card.totalRewards}
              selectId={selectId}
              setSelectId={setSelectId}
              textoDescripcion={card.description}
            />
          );
        })}
      </ModalContent>
    </ModalStyled>
  );
};
