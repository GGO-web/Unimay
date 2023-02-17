import React from 'react';

export const Topnav = () => {
  return (
    <div className="topnav">
      <nav>
        <ul>
          <li>
            <a href="/">Фільми</a>
          </li>
          <li>
            <a href="/">Серіали</a>
          </li>
          <li>
            <a href="/">Мульти</a>
          </li>
          <li>
            <a href="/">Форум</a>
          </li>
          <li>
            <a href="/">Топ100</a>
          </li>
        </ul>
      </nav>
      <div className="btn-group">
        <button id="enter">Вхід</button>
        <button id="register">Реєстрація</button>
      </div>
    </div>
  );
};
