import React from 'react';
import {Link} from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found flex">
      <div className="container flex-center">
        <h1 className="heading">Сторінку не знайдено</h1>

        <Link to="/" className="button-style">
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
};
