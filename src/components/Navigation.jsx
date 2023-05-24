import NavigationItem from './NavigationItem';
import React from 'react';
import '../style/Navigation.scss';
const Navigation = ({ items }) => {
  return (
    <nav className="Navigation">
      <ul>
        {items.map((item, i) => (
          <NavigationItem key={i} name={item} />
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
