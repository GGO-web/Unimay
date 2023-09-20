import { FlexGroup } from '@components/FlexGroup/FlexGroup';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import React from 'react';
import { ICurrentAnime } from 'src/constants';
import { NextSeasons } from '../NextSeasons/NextSeasons';

export const TitleInfo = ({ anime }: { anime: ICurrentAnime }) => {
  return (
    <div className="title-info">
      <Heading>{anime.name}</Heading>
      <main className="title-info__main">
        <div
          className="title-info__promo"
          style={{ backgroundImage: `url(${anime.image})` }}
        >
          <div className="title-info__promo-raiting">
            <p className="text-sm">
              <strong>IMDB</strong>
            </p>
            <p className="text-xl">
              <strong>{anime.raiting}</strong>
            </p>
          </div>
        </div>

        <div className="title-info__description pb-[28px] mt-[48px]">
          <FlexGroup gap={28} column>
            <Paragraph>
              <strong>Рік виходу:</strong> {anime.year}
            </Paragraph>

            <Paragraph>
              <strong>Країна:</strong> {anime.country}
            </Paragraph>

            <Paragraph>
              <strong>Жанр:</strong> {anime.genr}
            </Paragraph>

            <Paragraph>
              <strong>Режисер:</strong> {anime.producer}
            </Paragraph>

            <Paragraph>
              <strong>Актори:</strong> {anime.actors}
            </Paragraph>

            <Paragraph>
              <strong>Озвучення:</strong> {anime.subtitles ? 'Субтитри' : '-'}
            </Paragraph>
          </FlexGroup>
        </div>
      </main>
    </div>
  );
};
