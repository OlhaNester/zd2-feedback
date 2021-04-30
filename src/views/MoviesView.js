import React, { Component } from 'react';
//import Axios from 'axios';

class MoviesView extends Component  {
  state = {
    query: query,
    movies: []
  };
  async componentDidMount(query) {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&page=1&include_adult=false`,
    );
    this.setState({ movies: response.data.results });
    console.log(response.data.results);
  }
  render() {
    return (<>
      <h1> Cтраница поиска фильмов по ключевому слову</h1>
       <form >
          <button type="submit" >
            <span >Search</span>
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
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
    </>);
    }
  
};

export default MoviesView;