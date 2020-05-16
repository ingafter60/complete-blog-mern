import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagesHome from './pages/PagesHome';
import PagesCategory from './pages/PagesCategory';
import PagesSingle from './pages/PagesSingle';
import Pages404 from './pages/Pages404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <PagesHome />
        </Route>
        <Route path='/category'>
          <PagesCategory />
        </Route>
        <Route path='/single'>
          <PagesSingle />
        </Route>
        <Route path='*'>
          <Pages404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
