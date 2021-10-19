import React from 'react';
import { Container, AccordionContainer, AccordionItem } from './styles';
import { Accordion, Icon } from '../../components/';

const Home = () => {
  return (
    <Container>
      <AccordionContainer>
        <Accordion title="Test title" description={
          //Здесь можно как написать, так и включить любой компонент, который необходимо отображать внутри
          <AccordionItem><Icon type="Globus"/><p className="text">Body</p></AccordionItem>
        }/>
      </AccordionContainer>
    </Container>
  )
}

export default Home;