import React from 'react';
import styled from 'styled-components';
import { size } from '../../styles/devices';
import { ModalThanks } from '../ModalThanks/ModalThanks';

const CardDiv = styled.div`
  margin-top: 25px;
  border: solid
    ${(props) => (props.active ? `3px hsl(176, 50%, 47%)` : `1px #80808042`)};
  transition: all 0.1s;
  border-radius: 5px;
  padding: 25px;
  opacity: ${(props) => props.disabled && `0.3`};
  ${({ disabled }) =>
    !disabled &&
    `
     &:hover {
    h3 {
      color: hsl(176, 50%, 47%);
    }
  }
  `}

  @media (max-width: ${size.mobileL}) {
    padding: 15px 0 15px 0;
    height: auto;
    p {
      font-size: 15px;
    }
  }
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};

  @media (max-width: ${size.mobileL}) {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    & div > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      margin: 0 10px 0 0;
    }
  }

  h3 {
    @media (max-width: ${size.mobileL}) {
      margin: 0;
    }
    margin: 0 25px 0 25px;
  }
  div {
    display: flex;
    justify-content: baseline;
    align-items: baseline;
  }
  text-align: center;
  span {
    font-weight: bold;
    color: hsl(176, 50%, 47%);
  }
`;

const RadioButtonDiv = styled.div`
  border: 1px solid hsl(176, 50%, 47%);
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.active ? `hsl(176, 50%, 47%)` : `white`};
`;

const DescriptionCard = styled.p`
  color: gray;
  padding: 0 25px 0 25px;
  margin-left: 15px;
  line-height: 1.6;

  @media (max-width: ${size.mobileL}) {
    padding: 0 12px 0 12px;
  }
`;

const DivSelectForm = styled.div`
  color: gray;
  margin: 15px 0 0 0;
  padding: 0 25px 0 25px;
`;

const DivTotalRewards = styled.div`
  @media (max-width: ${size.mobileL}) {
    display: none !important;
  }
`;
const DivTotalRewardsMobile = styled.div`
  margin: 15px 0 0 0;
  padding: 0 25px 0 25px;
  @media (min-width: ${size.mobileL}) {
    display: none !important;
  }
`;

const FormDiv = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  @media (max-width: ${size.mobileL}) {
    span {
      margin-bottom: 15px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0 15px 0;
    flex-direction: column;
  }

  button {
    background-color: hsl(176, 50%, 47%);
    color: white;
    padding: 15px 15px 15px 15px;
    border: none;
    font-weight: bold;
    border-radius: 40px 40px 40px 40px;
    cursor: pointer;
  }

  input {
    font-weight: bold;
    width: 100px;
    border: solid 1px gray;
    padding: 10px 0px 10px 0px;
    text-align: center;
    border-radius: 36px;
    margin: 0 15px 0 0;
  }
`;

export const CardModal = ({
  id,
  titulo,
  precio,
  totalR,
  textoDescripcion,
  selectId,
  setSelectId,
}) => {
  const handleSelectReward = (e) => {
    setSelectId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <CardDiv
        disabled={totalR === 0 && true}
        onClick={totalR !== 0 ? handleSelectReward : undefined}
        active={selectId === id ? true : false}
      >
        <TitleCard disabled={totalR === 0 && true}>
          <div>
            <RadioButtonDiv active={selectId === id ? true : false} />
            <div>
              <h3>{titulo}</h3>
              {precio !== '0' && <h3> Piedge ${precio} or more</h3>}
            </div>
          </div>
          <DivTotalRewards>
            {totalR != null && <h4> {totalR} Left</h4>}
          </DivTotalRewards>
        </TitleCard>

        <DescriptionCard>{textoDescripcion}</DescriptionCard>

        <DivTotalRewardsMobile>
          {totalR != null && <h4> {totalR} Left</h4>}
        </DivTotalRewardsMobile>

        {selectId === id && (
          <DivSelectForm>
            <hr />
            <FormDiv onSubmit={handleSubmit}>
              <span>Enter your piedge</span>
              <div>
                <input type="number" placeholder={precio} />
                <button>Continue</button>
              </div>
            </FormDiv>
          </DivSelectForm>
        )}
      </CardDiv>
    </>
  );
};
