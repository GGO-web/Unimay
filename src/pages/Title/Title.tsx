import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs';
import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';

import {
  CURRENT_ANIME,
  NEXT_ANIME,
  RECOMMENDATIONS_ANIME,
  TITLE_BREADCRUMBS
} from '../../constants';
import { TitleInfo } from './components/TitleInfo/TitleInfo';
import { NextSeasons } from './components/NextSeasons/NextSeasons';
import { Recommendations } from './components/Recommendations/Recommendations';

export const Title = () => {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />
        <Sidenav />

        <section className="title">
          <div className="title__container container">
            <Breadcrumbs items={TITLE_BREADCRUMBS} />

            <main className="title__main">
              <TitleInfo anime={CURRENT_ANIME} />
              <div className="title__main-col-2">
                <NextSeasons anime={NEXT_ANIME} />
                <Recommendations anime={RECOMMENDATIONS_ANIME} />
              </div>
            </main>
          </div>
        </section>
      </div>
    </section>
  );
};
