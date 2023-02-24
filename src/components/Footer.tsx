import React from 'react';

import fb from '/assets/fb.png';
import insta from '/assets/insta.png';
import tictok from '/assets/tictok.png';

const madeWithLinks = [
  {url: 'https://www.gatsbyjs.org/', icon: fb, label: 'Facebook'},
  {url: 'https://github.com/taniarascia', icon: insta, label: 'Instagram'},
  {url: 'https://www.netlify.com', icon: tictok, label: 'Tictok'},
];

export const Footer = () => {
  return (
    <footer className="footer grid-span">
      <div className="footer__container container">
        <div className="footer__company">
          <a href="#" className="footer__logo">
            <img src="/img/logo.png" alt="logo" />
          </a>

          <p className="footer__copy">
            UNIMAY Media, Студія озвучування аніме, 2023 (с) Всі права захищені.
          </p>
        </div>

        <ul className="footer__links list-reset">
          {madeWithLinks.map((link) => (
            <li className="footer__links-item" key={link.url}>
              <a
                className="footer__link"
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <img src={link.icon} alt={link.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
