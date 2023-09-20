import { FlexGroup } from '@components/FlexGroup/FlexGroup';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { INextSeasson } from 'src/constants';
import { Stars } from './Stars/Stars';
import { Button } from '@components/Button/Button';

export const NextSeasons = ({ anime }: { anime: INextSeasson }) => {
  const showShortStrProducers = anime.producer.slice(0, 14) + '...';

  return (
    <div className="next-seasons">
      <header className="next-seasons__header">
        <Heading level={3}>Наступні сезони</Heading>
        <Paragraph className="underline cursor-pointer ">
          Дивитися всі
        </Paragraph>
      </header>
      <main className="next-seasons__main mt-[41px] flex justify-between gap-x-10">
        <div
          className="next-seasons__promo"
          style={{ backgroundImage: `url(${anime.image})` }}
        >
          <div className="next-seasons__promo-raiting">
            <p className="text-sm">
              <strong>IMDB</strong>
            </p>
            <p className="text-xl">
              <strong>{anime.raiting}</strong>
            </p>
          </div>
        </div>

        <div className="next-seasons__description">
          <FlexGroup gap={6} column>
            <Paragraph size="sm">
              {anime.numberOfSeasons} сезони, {anime.year}
            </Paragraph>
            <Paragraph size="xl">{anime.name}</Paragraph>
          </FlexGroup>
          <div className="next-seasons__description-stars">
            <Stars value={anime.vote} edit={false} />
            <div className="elipse" />
            <Paragraph>{anime.voteRaiting}K голосів</Paragraph>
          </div>
          <FlexGroup gap={2} column className="mb-[14px]">
            <Paragraph size="sm">Страна: {anime.country}</Paragraph>
            <Paragraph size="sm">Рік: {anime.year}</Paragraph>
            <Paragraph size="sm">Продюсер: {showShortStrProducers}</Paragraph>
          </FlexGroup>

          <Button className={'button-style'}>Почати прегляд</Button>
        </div>
      </main>
    </div>
  );
};
