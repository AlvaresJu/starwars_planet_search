import React from 'react';
import logoGraphics from '../images/grafismo-topo.png';
import logoTitle from '../images/logo-star wars.png';

function Logo() {
  return (
    <>
      <img src={ logoGraphics } alt="logo graphics" />
      <img src={ logoTitle } alt="star wars logo" />
    </>
  );
}

export default Logo;
