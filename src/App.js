import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Main } from './containers/common/main/Main';
import { Header } from './containers/common/header/Header';
import { Footer } from './containers/common/footer/Footer';
import { Audits } from './containers/audits/Audits';
import { SystemHelper } from './helper/SystemHelper';

import './style/style.css';

const LO_USER_ID = 2000;
const LO_COMPANY_NAME = 'LO Test';
const LO_ENTITY_TYPE = SystemHelper.USER_ENTITY_TYPE.LO;

const userData = {
  userId: LO_USER_ID,
  companyName: LO_COMPANY_NAME,
  entityType: LO_ENTITY_TYPE
};

function App() {
  return (
    <div className="App">
      <Header userData={userData} />
      <Router>
        <div>
          <Switch>
            <Route path="/audits">
              <Audits />
            </Route>
            <Route path="/questions">
              <Audits />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
