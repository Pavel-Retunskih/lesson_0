import React from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './componets/Image/Image';
import Title from './componets/Title/Title';
import Subtitle from './componets/Subtitle/Subtitle';
import Button from './componets/Button/Button';

function App() {
  return (
    <div>
      <Img src="Rectangle.png" />,
      <Title text ='Headline'/>
      <Subtitle text = 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen' />
      <Button text = 'See more'/>
      <Button text = 'Save'/>
    </div>
  );
}

export default App;
