import React from 'react';
import {Link} from 'react-router-dom';

export const Topnav = () => {
  return (
    <header className="topnav">
      <div className="topnav__container container">
        <nav className="menu">
          <ul className="list-reset list">
            <li className="list__item">
              <Link to="/">Фільми</Link>
            </li>
            <li className="list__item">
              <Link to="/">Серіали</Link>
            </li>
            <li className="list__item">
              <Link to="/">Мульти</Link>
            </li>
            <li className="list__item">
              <Link to="/">Форум</Link>
            </li>
            <li className="list__item">
              <Link to="/">Топ 100</Link>
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
