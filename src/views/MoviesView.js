import React, { Component } from 'react';
//import Axios from 'axios';

class MoviesView extends Component  {
  state = {
    movies: []
  };
  // async componentDidMount() {
  //   const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd');
  //   console.log(response);
  // }
  render() {
        return (<h1> Cтраница поиска фильмов по ключевому слову</h1>);
    }
  
};

export default MoviesView;