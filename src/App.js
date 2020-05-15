import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PagesHome from './pages/PagesHome';
import PagesCategory from './pages/PagesCategory';
import PagesSingle from './pages/PagesSingle';
import Pages404 from './pages/Pages404';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <PagesHome />
      </Route>
      <Route path='/category'>
        <PagesCategory />
      </Route>
      <Route path='/single'>
        <PagesSingle />
      </Route>
      <Route path='/404'>
        <Pages404 />
      </Route>
    </BrowserRouter>
  );
}

export default App;
