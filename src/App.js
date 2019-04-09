import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </header>
        <article>
          <ImageList/>
        </article>
      </div>
    );
  }
}

export default App;
