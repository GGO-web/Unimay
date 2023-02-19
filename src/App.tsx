import React from 'react';

import {Route, Routes} from 'react-router-dom';

import {Home} from './pages/Home/Home';
import {NotFound} from './pages/NotFound/NotFound';
import {Anime} from './pages/Anime/Anime';

export const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
