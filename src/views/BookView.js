import React, { Component } from 'react';
import Axios from 'axios';

class Books extends Component  {
  state = {
    books: []
  };
  async componentDidMount() {
    const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd');
    console.log(response);
  }
  render() {
      <>
      return <h1> Тут названия книг</h1>;
      <ul>
        {/* {this.state.books.map(book => (
          <li> key={book.id} {book.title}</li> */}
        ))
        </ul>
        </>
    }
  
}

export default Books;