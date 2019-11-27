import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Header, Avatar, Name, Bio} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const {navigation} = this.props;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>@User_Name</Name>
          <Bio>@Exp</Bio>
        </Header>
      </Container>
    );
  }
}
