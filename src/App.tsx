import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from '@pages/Home/Home';
import { Team } from '@pages/Team/Team';
import { News } from '@pages/News/News';
import { NotFound } from '@pages/NotFound/NotFound';
import { Title } from '@pages/Title/Title';

import { ROUTES } from './constants';
import { SearchResults } from '@pages/SearchResults/SearchResults';

export const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TEAM} element={<Team />} /> {/* path="/team" */}
        <Route path={ROUTES.TITLE} element={<Title />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.SEARCH} element={<SearchResults />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
};
