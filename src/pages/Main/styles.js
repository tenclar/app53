import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  padding: 30px;
  background: #c0e5fa;
`;

export const ButtonGroup = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  background: #fff;
`;

export const HomeButton = styled(RectButton)`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

  border-radius: 4px;
  background: #38b6ff;
  justify-content: center;

  height: 30px;
`;

export const PerfilButton = styled(RectButton)`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

  border-radius: 4px;
  background: #38b6ff;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
export const QuestButton = styled(RectButton)`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

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
export const ButtonGroupCheck = styled.View`
  margin-top: 5px;

  align-items: center;

  justify-content: center;
  padding: 5px;
  background: #c7d0d8;
`;

export const QuButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  height: 36px;
`;
export const QuButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
