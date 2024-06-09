import React, { useState, useEffect } from 'react';

const images = [
  "https://www.strafe.com/_next/image/?url=https%3A%2F%2Fwww.strafe.com%2Fesports-betting%2Fstrafe-news%2Fwp-content%2Fuploads%2Fsites%2F29%2FGPGpjkTW0AAUmS0-scaled.jpg&w=3840&q=75",
  "https://wallpaperset.com/w/full/d/8/1/5805.jpg",
  "https://img1.wallspic.com/crops/5/9/5/8/3/138595/138595-black_flat_screen_computer_monitor_with_keyboard_and_mouse-1920x1080.jpg"
];

const captions = [
  "G2 Crowned Champions at IEM Dallas 2024",
  "High-Precision Military Games Are Captivating More Players",
  "Ensure Top-Quality Gear for Immersive, Problem-Free Gaming"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // image speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', marginBottom: '30px', overflow: 'hidden', height: '500px', position: 'relative' }}>
      {images.map((image, index) => (
        <div key={index} style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: index === currentIndex ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}>
          <img
            src={image}
            alt={`Slideshow Images1 ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            {captions[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
