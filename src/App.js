import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';


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
          to="/movie"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Movies
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          exact
          to="/movie/:movieId"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Books
        </NavLink>
      </li> */}
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies" component={MoviesView} />
      {/* <Route path="/movies/:movies/Id" component={MovieDetailsView} /> */}
      {/* <Redirect to="/" /> */}
    </Switch>
  </>
);

export default App;