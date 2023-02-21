import React, {useRef} from 'react';

import {Link} from 'react-router-dom';

export const Header = () => {
  const iconMenu = useRef<HTMLButtonElement>(null);

  function menuToggle() {
    if (iconMenu.current?.getAttribute('aria-expanded') === 'true') {
      document.documentElement.classList.remove('menu-open');
      iconMenu.current.setAttribute('aria-expanded', 'false');
    } else if (iconMenu.current?.getAttribute('aria-expanded') === 'false') {
      document.documentElement.classList.add('menu-open');
      iconMenu.current.setAttribute('aria-expanded', 'true');
    }
  }

  return (
    <header className="header">
      <div className="header__container container">
        <div className="menu">
          <button
            ref={iconMenu}
            className="menu__icon icon-menu btn-reset"
            aria-label="Відкрити головне меню"
            aria-expanded="false"
            aria-controls="menu"
            onClick={menuToggle}
          >
            <span />
          </button>

          <nav className="menu__body">
            <ul className="menu__list list-reset">
              <li className="menu__item">
                <Link to="/" className="menu__link">
                  Фільми
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/" className="menu__link">
                  Серіали
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/" className="menu__link">
                  Мульти
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/" className="menu__link">
                  Форум
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/" className="menu__link">
                  Топ 100
                </Link>
              </li>
            </ul>

            <div className="button-group">
              <Link to="/login" className="button-style">
                Вхід
              </Link>
              <Link
                to="/registration"
                className="button-style button-style_stroke"
              >
                Реєстрація
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
