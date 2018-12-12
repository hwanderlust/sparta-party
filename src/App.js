import React, { Component } from 'react';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import MasonryContainer from './components/masonry/MasonryContainer';
import Footer from './components/footer/Footer';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Carousel />
        <MasonryContainer />
        <Footer />
      </>
    );
  }
}

export default App;
