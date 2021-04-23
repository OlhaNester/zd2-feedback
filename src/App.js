
import React, { Component } from 'react';
 import axios from 'axios';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import fetchImage from './services/fetchImage';

//import Button from './components/Button';
//import Loader from './components/Loader'
//import './App.css';

class App extends Component {
  state = {
    images: [],
    filter: '',
    showModal: false,
    //isLoading: false,
    //error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      fetchImage();
    }
  }

  handleSearch = query => {
    this.setState({ filter: query });
  };

    toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, showModal } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        <button type="button" onClick={this.toggleModal}>
          {' '}
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello!</h1>
            <button type="button" onClick={this.toggleModal}>
              {' '}
              Закрыть модалку
            </button>
          </Modal>
        )}
        {/* <Button>
          <Loader />
        </Button> */}
      </div>
    );
  }
}

export default App;
