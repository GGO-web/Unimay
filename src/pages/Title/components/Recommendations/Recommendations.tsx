import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';

import { IRecommendations } from '../../../../constants';
import { getImageUrl } from '@helpers/getImageUrl';

export const Recommendations = ({ anime }: { anime: IRecommendations }) => {
  const showHashtags = anime.hashtags
    .map((hashtags) => '#' + hashtags)
    .join(' ');

  return (
    <div className="recommendations">
      <header className="recommendations__header">
        <Heading level={3}>Рекомендації</Heading>
        <Paragraph className="underline cursor-pointer ">
          Дивитися всі
        </Paragraph>
      </header>

      <main className="recommendations__description">
        <div
          className="recommendations__description-promo"
          style={{ backgroundImage: `url(${anime.image})` }}
        />

        <div className="recommendations__description-block">
          <Paragraph>{showHashtags}</Paragraph>
          <Paragraph size="xl">{anime.name}</Paragraph>

          <Paragraph>{anime.voteRating}K переглядів </Paragraph>
          <div className="recommendations__description-block-comment">
            <img src={getImageUrl('comment.svg')} alt="icon" />
            <Paragraph>{anime.quantityComment} коментарів</Paragraph>
          </div>
        </div>
      </main>
    </div>
  );
};
