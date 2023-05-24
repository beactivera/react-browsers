import '../style/Browser.scss';
import React from 'react';

const Browser = ({ name, logo, description }) => {
  return (
    <section className="Browser">
      <h2>{name}</h2>
      <img src={logo} alt="logo" />
      <p>{description}</p>
    </section>
  );
};
export default Browser;
