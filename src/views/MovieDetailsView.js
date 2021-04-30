import React, { Component } from 'react';
import Axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import MovieCastView from './MovieCastView';
import MovieReviewsView from './MovieReviewsView';

class MovieDetailsView extends Component {
  state = {
    title: null,
    imgUrl: null,
    popularity: null,
    overview: null,
    id: null,
    genre: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`,
    );
console.log(response);
    this.setState({ ...response.data });
  }

  render() {
    
    return (
      <>
        <button type="button"> go back</button>
        <h2>{this.state.title}</h2>
        <img src={this.state.imgUrl} alt="" />
        
        <u>
          <li>
            <h3> Overview</h3>
            <p>{this.state.overview}</p>
          </li>
          <li>
            <h3> Genres</h3>
            <p>{this.state.genre}</p>
          </li>
        </u>
        <div>
          <h4>Additional infomation</h4>
          <ul>
          <li>
        <NavLink
        
          exact
          to="/movies/:movieId/cast"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Cast
        </NavLink>
            </li>
            <li>
           <NavLink
        
          exact
          to="/movies/:movieId/reviews"
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Reviews
        </NavLink>
            </li>
            </ul>
        </div>
        <Switch>
      
      <Route path="/movies/:movie/Id/cast" component={MovieCastView} />
      <Route path="/movies/:movie/Id/reviews" component={MovieReviewsView} />
    </Switch>
        
      </>
    );
  }
}

export default MovieDetailsView;