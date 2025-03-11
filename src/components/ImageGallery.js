import React from 'react';
import healthcareImage1 from '../assets/healthcare1.jpg';
import healthcareImage2 from '../assets/healthcare2.jpg';
import healthcareImage3 from '..//assets/healthcare3.jpg';

const ImageGallery = () => (
  <div className="image-gallery">
    <img src={healthcareImage1} alt="Healthcare 1" className="healthcare-image" />
    <img src={healthcareImage2} alt="Healthcare 2" className="healthcare-image" />
    <img src={healthcareImage3} alt="Healthcare 3" className="healthcare-image" />
  </div>
);

export default ImageGallery;
