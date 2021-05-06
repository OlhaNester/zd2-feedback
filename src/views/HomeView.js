import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Axios from 'axios';

class HomeView extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd',
    );
    this.setState({ movies: response.data.results });
  }
  render() {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
      <>
        <h1>Trending today</h1>;
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;