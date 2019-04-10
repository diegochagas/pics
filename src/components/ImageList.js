import React from 'react';
import "./ImageList.css";

export default class ImageList extends React.Component {

  showImages(){
    return this.props.images.map(({id, alt_description, urls}) => {
      return (
        <img key={id} src={urls.regular} alt={alt_description}/>
      );
    });
  }

  render(){
    return(
      <section className="image-list">
        {this.showImages()}
      </section>
    );
  }

}