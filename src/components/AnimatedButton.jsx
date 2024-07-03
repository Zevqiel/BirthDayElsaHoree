import React from 'react';
import '../styles.css';

const AnimatedButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="animated-button">
      {children}
    </button>
  );
};

export default AnimatedButton;
