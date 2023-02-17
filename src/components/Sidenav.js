import React from "react";

import menu from "../assets/menu-fries.png";
import logo from "../assets/logo-mini.png";
import about from "../assets/about.png";
import search from "../assets/search.png"

const mainNavItems = [
    { url: '/', icon: logo, label: 'Home'},
    { url: '/projects', icon: menu, label: 'Menu' },
    { url: '/me', icon: about, label: 'About' },
    { url: '/blog', icon: search, label: 'Search' },
  ]


export const Sidenav  = () => {
    return(
        <div className="sidenav">
            <nav>
            {mainNavItems.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_self"
              rel="noopener noreferrer"
              key={link.url}
            >
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
            </nav>
        </div>
    )
}