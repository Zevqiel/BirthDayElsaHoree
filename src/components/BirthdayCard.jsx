import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

const BirthdayCard = () => {
  return (
    <motion.div
      className="birthday-card"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src="https://waifu2x.booru.pics/outfiles/712425ddbdb84a5944182f53cde102049af56be9_s2_n2_y2.jpg" className='image' alt="Birthday" />
      <img src="https://waifu2x.booru.pics/outfiles/0da6f7fba560122a4da4fafa3afc6047568f654f_s2_n2_y2.jpg" className='image' alt="Birthday" />
      <div className="content">
        <div className="title">Selamat Ulang Tahun Ke 18 Horeeeee</div>
        <a href="#">Teh Elsa Salisa</a>
        <p>Yang rajin belajarnya, semoga keterima kerjanya yaaa, semoga cita cita ke jepang tercapai aamiin</p>
      </div>
    </motion.div>
  );
};

export default BirthdayCard;
