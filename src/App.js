import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';

const App = () => (
  <>
    {/* навигация - сделать ссылки, заимпортировать Link или NavLink */}
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
          to="/movies"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies" component={MoviesView} />
      <Route path="/:movieId" component={MovieDetailsView} />
    </Switch>
  </>
);

export default App;