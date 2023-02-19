import React from 'react';

import {Route, Routes} from 'react-router-dom';

import {Home} from './pages/Home/Home';
import {NotFound} from './pages/NotFound/NotFound';

export const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
