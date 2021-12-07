import './App.scss';
import React from 'react';
import { Content, Link as CarbonLink } from 'carbon-components-react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import LogoutBtn from './components/LogoutBtn';
import Dashboard from './components/Dashboard';
import InfoPage from './components/InfoPage/InfoPage';
import useToken from './customHooks/useToken';
import InfoText from './components/InfoText';

const App = () => {
  const { token, setToken } = useToken();

  return (
    <Content>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-md-14 bx--col-lg-14 bx--col-xlg-14 bx--col-max-14">
            <h1>Demo App</h1>
          </div>
          {
            token ? (
              <div className="bx--col-md-2 bx--col-lg-2 bx--col-xlg-2 bx--col-max-2">
                <LogoutBtn token={token} setToken={setToken}/>
              </div>
            ) : (
              <InfoText />
            )
          }
        </div>

        <hr />
        <br />

        <div className="bx--row">
          {
            token ? (
              <>
                <div className="bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
                  <h3>Navigation</h3>
                  <br />
                  <nav className="navLinks">
                    <Link to="/">Dashboard</Link><br />
                    <Link to="/InfoPage">InfoPage</Link>
                  </nav>
                </div>

                <div className="bx--col-md-12 bx--col-lg-12 bx--col-xlg-12 bx--col-max-12">
                  <Switch>
                    <Route exact path="/">
                      <Dashboard token={ token } />
                    </Route>
                    <Route path="/InfoPage">
                      <InfoPage />
                    </Route>
                  </Switch>
                </div>
              </>
            ) : (
              <>
                <div className="bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
                  <Login token={token} setToken={setToken} />
                </div>

                <div className="bx--col-md-6 bx--col-lg-6 bx--col-xlg-6 bx--col-max-6">
                  <InfoPage />
                </div>

                <div className="bx--col-md-6 bx--col-lg-6 bx--col-xlg-6 bx--col-max-6">
                  <InfoPage />
                </div>
              </>
            )
          }
        </div>
      </div>
    </Content>
  );
}

export default App;