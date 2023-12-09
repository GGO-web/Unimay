import React from 'react';
import { CardItem } from '@components/CardItem/CardItem';
import { Title } from '@services/Title/interfaces/Title.interface';

interface IListTitleProps {
  items: Title[] | undefined;
}

export const ListTitles: React.FC<IListTitleProps> = ({ items }) => {
  return (
    <div>
      {items?.map((title) => (
        <CardItem
          imageLink={title.imageLink}
          year={title.year}
          name={title.name}
          description={title.description}
          id={title.id}
        />
      ))}
    </div>
  );
};
