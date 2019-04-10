import React from 'react';
import "./ImageList.css";
import ImageCard from './ImageCard';

export default class ImageList extends React.Component {
  images(){
    return this.props.images.map(image => <ImageCard key={image.id} image={image} />);
  }

  render(){
    return(
      <section className="image-list">
        {this.images()}
      </section>
    );
  }

}