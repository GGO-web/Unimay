import { ROUTES } from '@/constants';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { StarRating } from '@components/Rating/Rating';
import React from 'react';
import { Link } from 'react-router-dom';

interface ICardItemProps {
  imageLink: string;
  year: number;
  id: string;
  name: string;
  description: string;
}

export const CardItem: React.FC<ICardItemProps> = ({
  imageLink,
  year,
  id,
  name,
  description
}) => {
  return (
    <article
      className="card flex flex-col flex-auto"
      style={{
        backgroundImage: `url(${imageLink})`
      }}
    >
      <div className="card-bottom">
        <Paragraph className="card-seasons mb-1.5">{year}</Paragraph>

        <Link to={ROUTES.VIEW_TITLE_BY_ID(id)}>
          <Heading level={3} className="card-title mb-2">
            {name}
          </Heading>
        </Link>

        <StarRating />

        <Paragraph className="card-text mt-3 line-clamp-3">
          {description}
        </Paragraph>
      </div>
    </article>
  );
};
