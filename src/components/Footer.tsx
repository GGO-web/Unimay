import React from 'react';

import { getIconUrl } from '../helpers/getIconUrl';
import { socialLinks } from '../constants';
import { Icon } from '@components/Icon/Icon';
import { Paragraph } from '@components/Paragraph/Paragraph';

export const Footer = () => {
  return (
    <footer className="footer grid-span">
      <div className="footer__container container">
        <div className="footer__company">
          <a href="#" className="footer__logo">
            <img src={getIconUrl('logo-large.svg')} alt="logo" />
          </a>

          <Paragraph className="footer__copy">
            UNIMAY Media, Студія озвучування аніме, 2023 (с) Всі права захищені.
          </Paragraph>
        </div>

        <ul className="footer__links list-reset">
          {socialLinks.map((link) => (
            <li className="footer__links-item" key={link.url}>
              <a
                className="footer__link"
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon iconName={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
