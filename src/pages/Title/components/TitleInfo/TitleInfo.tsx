import React from 'react';

import { FlexGroup } from '@components/FlexGroup/FlexGroup';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { ICurrentAnime, TITLE_INFO } from '../../../../constants';

export const TitleInfo = ({ anime }: { anime: ICurrentAnime }) => {
  return (
    <div className="title-info">
      <Heading>{anime.name}</Heading>
      <main className="title-info__main">
        <div
          className="title-info__promo"
          style={{ backgroundImage: `url(${anime.image})` }}
        >
          <div className="title-info__promo-rating">
            <p className="text-sm">
              <strong>IMDB</strong>
            </p>
            <p className="text-xl">
              <strong>{anime.rating}</strong>
            </p>
          </div>
        </div>

        <div className="title-info__description pb-[28px] mt-[48px]">
          <FlexGroup gap={28} column>
            {TITLE_INFO.map((item) => {
              const showSubtitles =
                item.key === 'subtitles' && item.key ? 'Субтитри' : '-';

              return (
                <Paragraph key={item.id}>
                  <strong>{item.characteristic}</strong>{' '}
                  {item.key !== 'subtitles' ? anime[item.key] : showSubtitles}
                </Paragraph>
              );
            })}
          </FlexGroup>
        </div>
      </main>
    </div>
  );
};
