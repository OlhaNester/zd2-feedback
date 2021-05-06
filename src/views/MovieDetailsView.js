import React, { Component } from 'react';
import Axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
//import MovieCastView from './MovieCastView';
//import MovieReviewsView from './MovieReviewsView';

class MovieDetailsView extends Component {
  state = {
    movie: {},
    title: null,
    poster_path: null,
    vote_average: null,
    overview: null,
    id: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`,
    );
    console.log(response);
    //this.setState({ ...response.data });
    this.setState({ movie: response.data });
  }

  render() {
    return (
      <>
        <h1> Страница одной книги</h1>
        <button type="button"> go back</button>
        <h2>{this.state.title}</h2>
        <img src={this.state.poster_path} alt="" />

        <ul>
          <li>
            <h3> User Score</h3>
            <p>{this.state.vote_average}</p>
          </li>
          <li>
            <h3> Overview</h3>
            <p>{this.state.overview}</p>
          </li>
          <li>
            <h3> Genres</h3>
            <p>{this.state.genres}</p>
          </li>
        </ul>
        {/* <div>
          <h4>Additional infomation</h4>
          <ul>
            <li>
              <NavLink
                exact
                to={`${this.props.match.url}${movie.id}/cast`}
                className="NavLink"
                activeClassName="NavLink_active"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`${this.props.match.url}${movie.id}/reviews`}
                className="NavLink"
                activeClassName="NavLink_active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/:movieId/cast" component={MovieCastView} />
          <Route
            path="/:movieId/reviews"
            component={MovieReviewsView}
          />
        </Switch> */}
      </>
    );
  }
}

export default MovieDetailsView;