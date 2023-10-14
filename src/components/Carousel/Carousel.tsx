import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

import { StarRating } from '../Rating/Rating';

import { carouselItems, ROUTES } from '../../constants';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { Heading } from '@components/Heading/Heading';
import { FreeMode } from 'swiper';
import { useMediaQuery } from '@reactuses/core';

export const Carousel = () => {
  const sliderFreeModeMedia = useMediaQuery('(max-width: 768px)');

  return (
    <Swiper
      className="carousel"
      spaceBetween={30}
      modules={[FreeMode]}
      grabCursor
      freeMode={sliderFreeModeMedia}
      breakpoints={{
        0: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 3
        }
      }}
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
