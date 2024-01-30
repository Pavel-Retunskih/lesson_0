import React from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './componets/Image/Image';
import Title from './componets/Title/Title';
import Subtitle from './componets/Subtitle/Subtitle';
import Button from './componets/Button/Button';
import styled from 'styled-components';

function App() {
  return (
      <Wrapp>
        <Container>
          <Img src="Rectangle.png" />
          <Title text='Headline' />
          <Subtitle text='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare   in venen' />
          <BtnContainer>
            <Button>See more</Button>
            <SaveBtn>Save</SaveBtn>
          </BtnContainer>  
        </Container>
      </Wrapp>
  );
}

const SaveBtn = styled(Button)`
  padding: 4px 20px 6px 20px;
  border: 2px solid #4E71FE;
  background: #FFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
  color: #4E71FE;
`

const Wrapp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: flex-start;
  gap: 18px;
  align-items: center;

`
export default App;
