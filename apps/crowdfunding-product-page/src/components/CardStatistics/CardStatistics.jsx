import React from 'react';
import styled from 'styled-components';
import { data } from '../../resources/db';
import { size } from '../../styles/devices';

const CardStatisticsStyled = styled.div`
  background-color: white;
  height: 100%;
  width: 40%;
  padding: 0 25px 50px 25px;
  margin: 30px;

  @media (max-width: ${size.mobileL}) {
    width: 80%;
    margin: 15px 0 15px 0;
    text-align: center;
  }
`;

const Statistics = styled.div`
  background-color: white;
  justify-content: space-around;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 35px 0 35px 0;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Section = styled.div`
  padding-right: 25px;

  @media (max-width: ${size.mobileL}) {
    margin: 5px 0 35px 0;
    text-align: center;
  }
  &:first-child {
    @media (max-width: ${size.mobileL}) {
      border: none;
    }

    border-right: 1px solid #80808029;
  }

  &:last-child {
    @media (max-width: ${size.mobileL}) {
      border: none;
      padding: 0;
    }
    border-left: 1px solid #80808029;
    padding-left: 25px;
  }

  span {
    color: gray;
  }
`;

const ProgessBar = styled.div`
  width: 50%;
  min-height: 20px;
  background-color: hsl(176, 50%, 47%);
  border-radius: 25px;
`;

const ContainerProgessBar = styled.div`
  width: 100%;
  min-height: 20px;
  background-color: #80808039;
  border-radius: 25px;
  margin: 50;
`;

export const CardStatistics = () => {
  return (
    <CardStatisticsStyled>
      <Statistics>
        <Section>
          <h1>$ {data.backed}</h1>
          <span>of ${data.backedTotal} backed</span>
        </Section>
        <Section>
          <h1>{data.backers}</h1>
          <span>total backers</span>
        </Section>
        <Section>
          <h1>{data.daysLeft}</h1>
          <span>days left</span>
        </Section>
      </Statistics>

      <ContainerProgessBar>
        <ProgessBar />
      </ContainerProgessBar>
    </CardStatisticsStyled>
  );
};
