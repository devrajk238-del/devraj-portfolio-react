import React from 'react';
import '../assets/css/Button.css';

const Button = ({ text, onClick, className = '' }) => {
  return (
    <a 
      href="#"
      className={`myBtn ${className}`}
      onClick={(e) => {
        e.preventDefault();  // prevent default anchor navigation
        if (onClick) onClick(e);
      }}
    >
      {text}
    </a>
  );
};

export default Button;
