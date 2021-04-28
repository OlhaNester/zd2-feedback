import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import Authors from './views/AuthorView';
import Books from './views/BookView';
import NotFound from './views/NotFound';

const App = () => (
  <>
    {/* навигация - сделать ссылки, заимпортировать Link */}
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/authors"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/books"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={Authors} />
      <Route path="/books" component={Books} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;