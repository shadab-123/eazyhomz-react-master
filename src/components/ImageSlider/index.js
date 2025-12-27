import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import './image-slider.scss';

const ImageSlider = ({ imagePaths,heading, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setZoom(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        setZoom(false); 
      }, 5000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imagePaths]);

  return (
    <Paper elevation={0} className="slideshow-container" style={{ height: `${height}px` }}>
      <div className="slideshow-content">
        <img
          src={imagePaths[currentIndex]}
          alt="Slideshow Image"
          className={`slideshow-image ${zoom ? 'zoom-out' : 'zoom-in'}`}
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

