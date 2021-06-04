import React from 'react';
import { Header } from './Header';
import { Mobile, MobileDropDownMenu } from './MoblieDropDownMenu';
import { ModifyData } from './ModifyData';
import { Footer } from './Footer';
import { AboutPage } from './About'
import { Favorites } from './Favorites'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


function App(props) {
  const dataset = props.data.drinks;
  return (
    <BrowserRouter>
      <div>
        <Header dataset={dataset} />
        <main>
          <Switch>

            <Route exact path="/">
              <Mobile />
              <ModifyData dataset={dataset} />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/favorites">
              <Favorites />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>

          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;