import React from 'react';

import {
  Container,
  Containerq,
  ButtonGroup,
  HomeButton,
  ButtonGroupCheck,
  ButtonText,
  QuButton,
  PerfilButton,
} from './styles';

export default function Main() {
  return (
    <>
      <Containerq>
        <ButtonText>
          O fazendeiro tinha 15 ovelhas e todas, exceto 8, morreram. Quantas
          sobraram?
        </ButtonText>
      </Containerq>
      <Container>
        <ButtonGroupCheck>
          <QuButton>
            <ButtonText>1</ButtonText>
          </QuButton>
          <QuButton>
            <ButtonText>2</ButtonText>
          </QuButton>
          <QuButton>
            <ButtonText>3</ButtonText>
          </QuButton>
        </ButtonGroupCheck>
      </Container>
      <ButtonGroup>
        <HomeButton>
          <ButtonText>anterior</ButtonText>
        </HomeButton>
        <PerfilButton>
          <ButtonText>Próximo</ButtonText>
        </PerfilButton>
      </ButtonGroup>
    </>
  );
}
Main.navigationOptions = {
  title: 'I-LogiQuest',
};
