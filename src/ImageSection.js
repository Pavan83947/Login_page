import React from 'react';
import './ImageSection.css';
import mahi from './assets/mahi.jpeg';

const ImageSection = () => {
  return (
    <div className="image-section">
      <img
        src={mahi}
        alt="Gears and Oil Visual"
        className="image"
      />
      <p className="image-caption">The Future Of Sheet Metal Processing</p>
    </div>
  );
};

export default ImageSection;