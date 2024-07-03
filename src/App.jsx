import React from 'react';
import Header from './components/Header';
import BirthdayCard from './components/BirthdayCard';
import ParallaxSection from './components/ParallaxSection';
import AnimatedButton from './components/AnimatedButton';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <div className="py-12">
        <BirthdayCard />
      </div>
      <div className="text-center py-8">
        <AnimatedButton onClick={() => alert('Selamat Ulang Tahun!')}>
          Rayakan Sekarang
        </AnimatedButton>
      </div>
      <ParallaxSection />
    </div>
  );
}

export default App;
