import { Heading } from '@components/Heading/Heading';
import { getWeekDay } from '@helpers/getWeekDay';
import { showNameMonth } from '@helpers/showNameMonth';
import React from 'react';

interface SeriesReleaseScheduleProps {
  listSeries: {
    id: string;
    season: number;
    series: number;
    episode: number;
    date: Date;
  }[];
}

export const SeriesReleaseSchedule: React.FC<SeriesReleaseScheduleProps> = ({
  listSeries
}) => {
  console.log(listSeries.map((item) => item.date.getDate()));

  return (
    <div className="series-release-schedule">
      <Heading className="text-xl mb-5">Графік виходу серій:</Heading>
      <div className="series-release-schedule__list">
        {listSeries.map((item) => {
          const day = item.date.getDate();
          const month = showNameMonth(item.date.getMonth());
          const year = item.date.getFullYear();
          const dayWeek = getWeekDay(item.date);

          return (
            <div key={item.id} className="series-release-schedule__item">
              <p>
                {item.season} сезон {item.series} серія
              </p>
              <p>Episode {item.episode}</p>
              <p>
                {day} {month} {year} {dayWeek}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
