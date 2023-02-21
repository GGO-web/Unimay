import React from 'react';

import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <nav className="menu">
          <ul className="menu__list list-reset">
            <li className="menu__list-item">
              <Link to="/" className="menu__link">
                Фільми
              </Link>
            </li>
            <li className="menu__list-item">
              <Link to="/" className="menu__link">
                Серіали
              </Link>
            </li>
            <li className="menu__list-item">
              <Link to="/" className="menu__link">
                Мульти
              </Link>
            </li>
            <li className="menu__list-item">
              <Link to="/" className="menu__link">
                Форум
              </Link>
            </li>
            <li className="menu__list-item">
              <Link to="/" className="menu__link">
                Топ 100
              </Link>
            </li>
          </ul>
        </nav>

        <div className="button-group" style={{display: 'flex', gap: '30px'}}>
          <Link to="/login" className="button-style">
            Вхід
          </Link>
          <Link to="/registration" className="button-style button-style_stroke">
            Реєстрація
          </Link>
        </div>
      </div>
    </header>
  );
};
