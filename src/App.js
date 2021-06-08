import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { ModifyData } from './ModifyData';
import { Footer } from './Footer';
import { AboutPage } from './About'
import { Favorites } from './Favorites'
import { RenderLogin } from './SignIn';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App(props) {
  const dataset = props.data.drinks;
  const [favState, setFavState] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Header dataset={dataset} />
        <main>
          <Switch>
            <Route exact path="/">
              <ModifyData fav={favState} dataset={dataset} />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/favorites">
              <Favorites setFavState={setFavState} dataset={dataset} />
            </Route>

            <Route exact path="/account">
              <RenderLogin />
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