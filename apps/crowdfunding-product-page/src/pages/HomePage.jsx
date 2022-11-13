import React, { useState } from 'react';
import image from '../images/image-hero-desktop.jpg';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import { CardHeader } from '../components/cardHeader/CardHeader';
import { ListCards } from '../components/ListCards/ListCards';
import { CardStatistics } from '../components/CardStatistics/CardStatistics';
import { size } from '../styles/devices';
import { ModalThanks } from '../components/ModalThanks/ModalThanks';
const Header = styled.header`
  height: 500px;
  width: 100%;
  background-size: cover;
  border-bottom: 5px solid white;
  background-repeat: no-repeat;
  color: white;
  font-size: 16px;

  @media (max-width: ${size.mobileL}) {
  }
`;

const Nav = styled.nav`
  padding: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap row;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin: 15px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    border-bottom: solid 1px white;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 450px;
  /* left: 40%; */
`;

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalThanks, setshowModalThanks] = useState(true);
  const [rewards, setRewards] = useState([
    {
      id: 0,
      title: 'Pledge with no reward',
      price: '0',
      description:
        'Choose to support without a reward if you simple believe in our project.',
    },
    {
      id: 1,
      title: 'Bamboo Stand',
      price: '25',
      totalRewards: 52,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    },
    {
      id: 2,
      title: 'Black Edition Stand',
      price: '75',
      totalRewards: 25,
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    },
    {
      id: 3,
      title: 'Mahogany Special Edition',
      price: '200',
      totalRewards: 0,
      description:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    },
  ]);

  const [selectId, setSelectId] = useState(0);

  return (
    <>
      {showModalThanks && (
        <ModalThanks
          showModalThanks={showModalThanks}
          setshowModalThanks={setshowModalThanks}
        />
      )}

      <Header style={{ backgroundImage: `url(${image})` }}>
        <Nav>
          <img src={logo} alt="React Logo" />
          <List>
            <Item>About</Item>
            <Item>Discover</Item>
            <Item> Get Started</Item>
          </List>
        </Nav>
      </Header>

      <Section>
        <CardHeader
          rewards={rewards}
          showModal={showModal}
          setShowModal={setShowModal}
          selectId={selectId}
          setSelectId={setSelectId}
        />
        <CardStatistics />
        <ListCards
          rewards={rewards}
          showModal={showModal}
          setShowModal={setShowModal}
          selectId={selectId}
          setSelectId={setSelectId}
        />
      </Section>
    </>
  );
};
