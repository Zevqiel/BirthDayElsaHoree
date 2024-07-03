import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles.css';

const Header = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <animated.div style={props} className="header">
      <h1>Selamat Ulang Tahun!</h1>
      <p>Semoga harimu menyenangkan dan penuh kebahagiaan.</p>
    </animated.div>
  );
};

export default Header;
