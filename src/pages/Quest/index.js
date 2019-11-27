import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Container, ButtonGroup, HomeButton, PerfilButton} from './styles';

export default function Main() {
  return (
    <>
      <Container />
      <ButtonGroup>
        <HomeButton>
          <Icon name="home" size={60} color="#FFF" />
        </HomeButton>
        <PerfilButton>
          <IconFontAwesome name="book-reader" size={60} color="#FFF" />
        </PerfilButton>
      </ButtonGroup>
    </>
  );
}
Main.navigationOptions = {
  title: 'I-LogiQuest',
};
