import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  padding: 30px;
  background: #c0e5fa;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
  background: #fff;
`;

export const HomeButton = styled(RectButton)`
  margin-top: 10px;
  padding: 40px;

  border-radius: 4px;
  background: #38b6ff;
  justify-content: center;

  height: 30px;
`;

export const PerfilButton = styled(RectButton)`
  margin-top: 10px;
  padding: 40px;

  border-radius: 4px;
  background: #38b6ff;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const HomeButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const PerfilButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
