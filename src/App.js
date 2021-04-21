
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';


//import Button from './components/Button';
//import Loader from './components/Loader';
//import './App.css';

class App extends Component {
  state = {
    images: [],
    filter: '',
    showModal: false,
    //isLoading: false,
    //error: null,
  };

  handleSearch = query => {
    this.setState({ filter: query });
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={ this.handleSearch}/>
        <ImageGallery />
        {/* <Button>
          <Loader />
        </Button> */}
      </div>
    );
  }
}

export default App;
