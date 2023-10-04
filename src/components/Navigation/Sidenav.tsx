import React from 'react';

import { Link } from 'react-router-dom';
import { Icon } from '@components/Icon/Icon';
import { Button } from '@components/Button/Button';

export const Sidenav = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__container">
        <Link
          className="sidenav__item sidenav__item--logo"
          to={'/'}
          title={'Home page'}
        >
          <Icon iconName={'logo'} />
        </Link>

        <Button
          className={'sidenav__item sidenav__item--menu'}
          iconName={'menu'}
        />
        <Button
          className={'sidenav__item sidenav__item--search'}
          iconName={'search'}
        />
      </div>
    </aside>
  );
};
