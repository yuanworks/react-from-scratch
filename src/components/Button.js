import React from 'react';
import '../styles/components/Button.scss';

function Button({ children }) {

  return (
    <button className='__button'>{ children }</button>
  );
}

export default Button;
