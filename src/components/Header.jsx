import React from 'react';
import '../style/Header.scss';
const Header = ({ title }) => {
  return <header className="Header">{title}</header>;
};

export default Header;
