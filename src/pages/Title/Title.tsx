import React, { useMemo } from 'react';
import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs';
import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';

import {
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
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { TitleService } from '@services/Title/Title.service';

export const Title = () => {
  const { id } = useParams();

  const { data: title } = useQuery({
    queryKey: ['titles', id],
    queryFn: async () => {
      return TitleService.getTitleById(id);
    },
    staleTime: 1000 * 60 * 60
  });

  const playerLink = useMemo(() => {
    return title?.players?.at(0)?.embedLink;
  }, [title]);

  const videoTabs: ITab[] = useMemo(() => {
    return [
      {
        id: 'anime',
        label: 'Дивитися онлайн',
        element: <CustomPlayer url={playerLink} />
      },
      {
        id: 'trailer',
        label: 'Трейлер',
        element: <TrailerPlayer />
      }
    ];
  }, [playerLink]);

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
                { name: title?.name || 'Невідомий шедевр', link: '#' }
              ]}
            />

            <section className="title__main">
              <TitleInfo anime={title} />

              <div className="title__main-col-2">
                <NextSeasons anime={NEXT_ANIME} />
                <Recommendations anime={RECOMMENDATIONS_ANIME} />
              </div>
            </section>

            <TitleDescription
              heading={title?.name}
              paragraph={title?.description}
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
