import React, { Component } from 'react';
import Axios from 'axios';

class MovieDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`,
    );

    this.setState({ ...response.data.results });
  }

  render() {
    const { imgUrl, title, author, descr } = this.state;
    return (
      <>
        <h1>Страница одной книги {this.props.match.params.bookId}</h1>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;