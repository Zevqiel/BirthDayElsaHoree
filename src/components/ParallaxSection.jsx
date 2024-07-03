import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../ParallaxSection.css';
import '../styles.css';

const ParallaxSection = () => {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="parallax-section yellow">
        <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/honkai-star-rail-thump-1.jpg" alt="Birthday" />
          <h2 className=''>Satu Hari Spesial</h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <div className="parallax-section green">
          <h2>Untuk Orang Spesial</h2>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxSection;
