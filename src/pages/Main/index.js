import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ButtonGroup,
  ButtonGroupCheck,
  HomeButton,
  PerfilButton,
  QuestButton,
  QuButton,
  QuButtonText,
} from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <ButtonGroupCheck>
          <QuButton>
            <QuButtonText>Desafio LOL Nivel 1</QuButtonText>
          </QuButton>
          <QuButton>
            <QuButtonText>Desafio FORT Nivel 1</QuButtonText>
          </QuButton>
          <QuButton>
            <QuButtonText>Desafio FORT Nivel 2</QuButtonText>
          </QuButton>
        </ButtonGroupCheck>
      </Container>
      <ButtonGroup>
        <HomeButton>
          <Icon name="home" size={60} color="#FFF" />
        </HomeButton>
        <QuestButton>
          <Icon name="assignment-late" size={60} color="#FFF" />
        </QuestButton>
        <PerfilButton>
          <Icon name="group" size={60} color="#FFF" />
        </PerfilButton>
      </ButtonGroup>
    </>
  );
}
Main.navigationOptions = {
  title: 'I-LogiQuest',
};
