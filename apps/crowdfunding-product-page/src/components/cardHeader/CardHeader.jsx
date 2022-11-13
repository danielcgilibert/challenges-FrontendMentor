import React, { useState } from 'react';
import styled from 'styled-components';
import logoM from '../../images/logo-mastercraft.svg';
import { Button } from '../Button/Button';
import { ButtonBookMarked } from '../ButtonBookMarked/ButtonBookMarked';
import { Modal } from '../Modal/Modal';
import { size } from '../../styles/devices';

const Card = styled.div`
  width: 40%;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  padding: 0 25px 0px 25px;

  @media (max-width: ${size.mobileL}) {
    width: 80%;
  }

  p {
    color: hsl(0, 0%, 48%);
    margin-top: 10px;
  }

  img {
    position: relative;
    top: -30px;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
  }
`;

export const CardHeader = ({
  showModal,
  setShowModal,
  rewards,
  selectId,
  setSelectId,
}) => {
  return (
    <>
      {showModal && (
        <Modal
          rewards={rewards}
          selectId={selectId}
          setSelectId={setSelectId}
          setShowModal={setShowModal}
        />
      )}

      <Card>
        <img src={logoM} alt="React Logo" />
        <h1> Mastercraft Bamboo Monitor Riser </h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div>
          <Button
            showModal={showModal}
            setShowModal={setShowModal}
            selectId={selectId}
            setSelectId={setSelectId}
            texto="Back this project"
          />
          <ButtonBookMarked />
        </div>
      </Card>
    </>
  );
};
