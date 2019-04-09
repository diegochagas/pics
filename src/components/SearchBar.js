import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchTerm: ""};
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render(){
    return(
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input className="search-field" type="text" 
            value={this.state.searchTerm} placeholder="Image Search" 
            onChange={event => this.setState({searchTerm: event.target.value})} />
        </form>
      </div>
    );
  }
}