import './App.css';
import { Content } from 'carbon-components-react';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginBtn from './components/LoginBtn/LoginBtn';

function App() {
  return (
    <>
      <Content>
        <LoginBtn />
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
