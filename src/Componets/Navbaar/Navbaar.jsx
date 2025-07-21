import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Navbaar.css';

import Main from './Main.png'; // Assuming you have a Main.svg file

function Navbaar() {
  const handleGetInTouchClick = () => {
    // Scroll to contact form or handle navigation as needed
    console.log('Get in Touch clicked');
    // You can add scroll to contact section logic here
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={Main} alt="Logo" className="logo" />
          
      </div>
      <button onClick={handleGetInTouchClick} className="navbar-cta-button">
        Get in Touch <FaArrowRight />
      </button>
    </nav>
  );
}

export default Navbaar;