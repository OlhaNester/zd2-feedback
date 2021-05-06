import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class MoviesView extends Component {
  state = {
    query: '',
    movies: [],
  };
  async componentDidMount(query) {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&page=1&include_adult=false&query=${query}`,
    );
    this.setState({ movies: response.data.results });
    console.log(response.data.results);
    
    
  }
  handleChange = event => {
      this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
    };
  render() {
    return (
      <>
        <h1> Cтраница поиска фильмов по ключевому слову</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder=""
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
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

export default MoviesView;