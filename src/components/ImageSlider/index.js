import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import './image-slider.scss';

const ImageSlider = ({ imagePaths, heading, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imagePaths]);

  return (
    <Paper elevation={0} className="slideshow-container" style={{ height: `${height}px` }}>
      <div className="slideshow-content">
        <img
          src={imagePaths[currentIndex]}
          alt="Slideshow Image"
          className="slideshow-image"
          loading='lazy'
        />
        <div className="text-container">
          {heading}
        </div>
      </div>
    </Paper>
  );
};

export default ImageSlider;

