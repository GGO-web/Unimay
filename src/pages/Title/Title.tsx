import React, { useMemo } from 'react';
import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs';
import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';

import {
  CURRENT_ANIME,
  DESCRIPTION_ANIME,
  NEXT_ANIME,
  RECOMMENDATIONS_ANIME,
  TITLE_BREADCRUMBS,
  LIST_RELEASE_SCHEDULE
} from '@/constants';
import { TitleInfo } from './components/TitleInfo/TitleInfo';
import { NextSeasons } from './components/NextSeasons/NextSeasons';
import { Recommendations } from './components/Recommendations/Recommendations';
import { TitleDescription } from './components/TitleDescrption/TitleDescription';
import { SeriesReleaseSchedule } from './components/SeriesReleaseSchedule/SeriesReleaseSchedule';

import { TitleImages } from './components/TitleImages/TitleImages';
import { SimilarAnime } from './components/SimilarAnime/SimilarAnime';

import { Comments } from './components/Comments/Comments';

import { CustomPlayer } from '@components/CustomPlayer/CustomPlayer';
import { TrailerPlayer } from '@components/TrailerPlayer/TrailerPlayer';
import { ITab, Tabs } from '@components/Tabs/Tabs';

export const Title = () => {
  const videoTabs: ITab[] = useMemo(() => {
    return [
      {
        id: 'anime',
        label: 'Дивитися онлайн',
        element: <CustomPlayer />
      },
      {
        id: 'trailer',
        label: 'Трейлер',
        element: <TrailerPlayer />
      }
    ];
  }, []);

  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />
        <Sidenav />

        <main className="main title">
          <div className="title__container container">
            <Breadcrumbs
              items={[
                ...TITLE_BREADCRUMBS,
                { name: 'Константин: Місто Демонів', link: '#' }
              ]}
            />

            <section className="title__main">
              <TitleInfo anime={CURRENT_ANIME} />
              <div className="title__main-col-2">
                <NextSeasons anime={NEXT_ANIME} />
                <Recommendations anime={RECOMMENDATIONS_ANIME} />
              </div>
            </section>

            <TitleDescription
              heading={DESCRIPTION_ANIME.heading}
              paragraph={DESCRIPTION_ANIME.paragraph}
            />

            <section className="player-outer">
              <TitleImages />

              <Tabs tabs={videoTabs} />

              <SeriesReleaseSchedule listSeries={LIST_RELEASE_SCHEDULE} />
            </section>

            <Comments />

            <SimilarAnime />
          </div>
        </main>
      </div>
    </section>
  );
};
