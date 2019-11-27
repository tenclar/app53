import React, {Component} from 'react';
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

export default class Main extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'I-LogiQuest',
  });

  render() {
    const {navigation} = this.props;
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
          <HomeButton
            onPress={() => {
              navigation.navigate('Main');
            }}>
            <Icon name="home" size={60} color="#FFF" />
          </HomeButton>
          <QuestButton
            onPress={() => {
              navigation.navigate('Quest');
            }}>
            <Icon name="assignment-late" size={60} color="#FFF" />
          </QuestButton>
          <PerfilButton
            onPress={() => {
              navigation.navigate('User');
            }}>
            <Icon name="group" size={60} color="#FFF" />
          </PerfilButton>
        </ButtonGroup>
      </>
    );
  }
}
