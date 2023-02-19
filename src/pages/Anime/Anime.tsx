import React from 'react';
import {useParams} from 'react-router-dom';
import {carouselItems} from '../../constants';

export const Anime = () => {
  const {id} = useParams();

  const [anime] = React.useState(carouselItems.find((item) => item.id === id));

  return (
    <section className="anime">
      <div className="anime__container container">
        <h1 className="heading">Аніме {anime?.title}</h1>
      </div>
    </section>
  );
};
