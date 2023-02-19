import React from 'react';
import {Link} from 'react-router-dom';

export const Topnav = () => {
  return (
    <header className="topnav flex-1">
      <div className="topnav__container container">
        <nav>
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
          <button className="button-style">Вхід</button>
          <button className="button-style button-style_stroke">
            Реєстрація
          </button>
        </div>
      </div>
    </header>
  );
};
