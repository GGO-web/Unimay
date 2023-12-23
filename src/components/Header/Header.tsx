import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { navigationItems } from '../../constants';

export const Header = () => {
  const iconMenu = useRef<HTMLButtonElement>(null);
  const [isVisibleBtnsAuth, setIsVisibleBtnsAuth] = useState<boolean>(false);

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
    <header className="header grid-span">
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
              {navigationItems.map((navItem) => {
                if (navItem.text !== 'Новини') {
                  return (
                    <li key={navItem.id} className="menu__item">
                      <Link to={navItem.href} className="menu__link">
                        {navItem.text}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>

            {isVisibleBtnsAuth && (
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
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
