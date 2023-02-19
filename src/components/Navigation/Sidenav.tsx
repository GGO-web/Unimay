import React from 'react';

import menu from '/assets/menu-fries.png';
import logo from '/assets/logo-mini.png';
import about from '/assets/about.png';
import search from '/assets/search.png';

import {Link} from 'react-router-dom';

const mainNavItems = [
  {url: '/', icon: logo, label: 'Home'},
  {url: '/menu', icon: menu, label: 'Menu'},
  {url: '/profile', icon: about, label: 'Profile'},
  {url: '/blog', icon: search, label: 'Search'},
];

export const Sidenav = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__container">
        {mainNavItems.map((link) => (
          <Link
            className="sidenav__link"
            to={link.url}
            title={link.label}
            key={link.url}
          >
            <img src={link.icon} alt={link.label} />
          </Link>
        ))}
      </div>
    </aside>
  );
};
