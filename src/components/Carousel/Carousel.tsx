import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

import { StarRating } from '../Rating/Rating';

import { carouselItems, ROUTES } from '../../constants';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { Heading } from '@components/Heading/Heading';

export const Carousel = () => {
  return (
    <Swiper
      className="carousel"
      spaceBetween={30}
      grabCursor
      slidesPerView="auto"
    >
      {carouselItems.map((carouselItem) => (
        <SwiperSlide key={carouselItem.id} className="carousel__item">
          <article
            className="card flex flex-col flex-auto"
            style={{
              backgroundImage: `url(${carouselItem.image})`
            }}
          >
            <div className="carousel__item-bottom">
              <Paragraph className="carousel__item-seasons mb-1.5">
                {carouselItem.seasons} сезони, {carouselItem.year}
              </Paragraph>

              <Link to={ROUTES.VIEW_TITLE_BY_ID(carouselItem.id)}>
                <Heading level={3} className="carousel__item-title mb-2">
                  {carouselItem.title}
                </Heading>
              </Link>

              <StarRating />

              <Paragraph className="carousel__item-text mt-3">
                {carouselItem.text}
              </Paragraph>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
