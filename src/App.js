import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Unsplash from './api/Unsplash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {images: []};
  }

  onSearchSubmit = async term => {
    const response = await Unsplash.get(`/search/photos?query=${term}`);
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </header>
        <article>
          <ImageList images={this.state.images} />
        </article>
      </div>
    );
  }
}

export default App;
