import { Heading } from '@components/Heading/Heading';

import React from 'react';
import { SeriesReleaseScheduleItem } from '../../../../constants';
import { formatDate } from '@helpers/formatDate';

export const SeriesReleaseSchedule: React.FC<{
  listSeries: SeriesReleaseScheduleItem[];
}> = ({ listSeries }) => {
  return (
    <div className="series-release-schedule">
      <Heading className="text-xl mb-5">Графік виходу серій:</Heading>
      <div className="series-release-schedule__list">
        {listSeries.map(({ id, season, series, episode, date }) => {
          return (
            <div key={id} className="series-release-schedule__item">
              <p>
                {season} сезон {series} серія
              </p>
              <p>Episode {episode}</p>
              <p>{formatDate(date)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
