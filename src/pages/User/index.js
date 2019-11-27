import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Header, Avatar, Name, Bio} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Usuário',
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <Header>
          <Avatar />
          <Name>@User_Name</Name>
          <Bio>@Exp</Bio>
        </Header>
      </Container>
    );
  }
}
