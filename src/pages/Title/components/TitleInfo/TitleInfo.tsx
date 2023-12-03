import React from 'react';

import { FlexGroup } from '@components/FlexGroup/FlexGroup';
import { Heading } from '@components/Heading/Heading';

import { Title } from '@services/Title/interfaces/Title.interface';

export const TitleInfo = ({ anime }: { anime?: Title }) => {
  return (
    <div className="title-info">
      <Heading>{anime?.name || 'Невідомий шедевр'}</Heading>
      <main className="title-info__main">
        <div
          className="title-info__promo"
          style={{ backgroundImage: `url(${anime?.imageLink})` }}
        >
          <div className="title-info__promo-rating">
            <p className="text-sm font-bold text-center">IMDB</p>
            <p className="text-xl font-bold text-center">5</p>
          </div>
        </div>

        <div className="title-info__description pb-[28px] mt-[48px]">
          <FlexGroup gap={28} column>
            <FlexGroup>
              <strong>Рік виходу:</strong>
              {anime?.year || '-'}
            </FlexGroup>

            <FlexGroup>
              <strong>Країна:</strong>
              {anime?.country || '-'}
            </FlexGroup>

            <FlexGroup>
              <strong>Жанр:</strong>
              {anime?.genres?.map((genre) => genre.name)?.join(', ') || []}
            </FlexGroup>

            <FlexGroup>
              <strong>Режисер:</strong>
              {anime?.directors || '-'}
            </FlexGroup>

            <FlexGroup>
              <strong>Озвучення:</strong> Cубтитри
            </FlexGroup>
          </FlexGroup>
        </div>
      </main>
    </div>
  );
};
