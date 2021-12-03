import './App.scss';
import { Content } from 'carbon-components-react';
import React from 'react';
import HomePage from './pages/HomePage';
import LoginBtn from './components/LoginBtn/LoginBtn';

function App() {
  return (
    <>
      <Content>
        <LoginBtn />
        <HomePage />
      </Content>
    </>
  );
}

export default App;
