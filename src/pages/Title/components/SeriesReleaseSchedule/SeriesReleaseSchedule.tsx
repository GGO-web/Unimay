import { Heading } from '@components/Heading/Heading';

import React from 'react';
import { LENGTH_CHARS_3 } from '../../../../constants';

interface SeriesReleaseScheduleProps {
  listSeries: {
    id: string;
    season: number;
    series: number;
    episode: number;
    day: number;
    month: string;
    year: number;
    dayWeek: string;
  }[];
}

export const SeriesReleaseSchedule: React.FC<SeriesReleaseScheduleProps> = ({
  listSeries
}) => {
  return (
    <div className="series-release-schedule">
      <Heading className="text-xl mb-5">Графік виходу серій:</Heading>
      <div className="series-release-schedule__list">
        {listSeries.map(
          ({ id, season, series, day, episode, year, month, dayWeek }) => {
            const shortenedMonth = month.slice(0, LENGTH_CHARS_3);

            return (
              <div key={id} className="series-release-schedule__item">
                <p>
                  {season} сезон {series} серія
                </p>
                <p>Episode {episode}</p>
                <p>
                  {day} {shortenedMonth} {year} {dayWeek}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
