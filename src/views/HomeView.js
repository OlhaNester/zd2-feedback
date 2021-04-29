import React, { Component} from 'react';
import { render } from 'react-dom';

class HomeView extends Component {
 state = {
    moviesTitle: []
 };
  async componentDidMount() {
    const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd');
    console.log(response);
  }
  
    render() {
        return (<h1> Trending today</h1>
        <ul>
{this.state.moniesTitle.map()}
        </ul>);
    }
       
    
};

export default HomeView;