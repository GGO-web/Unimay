import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

import { StarRating } from '../Rating/Rating';

import { ROUTES } from '../../constants';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { Heading } from '@components/Heading/Heading';
import { FreeMode } from 'swiper';
import { useMediaQuery } from '@reactuses/core';
import { Title } from '@services/Title/interfaces/Title.interface';
import { CardItem } from '@components/CardItem/CardItem';

export const Carousel = ({ items }: { items?: Title[] }) => {
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
      {items?.map((carouselItem) => (
        <SwiperSlide key={carouselItem.id} className="carousel__item">
          <CardItem
            imageLink={carouselItem.imageLink}
            year={carouselItem.year}
            name={carouselItem.name}
            description={carouselItem.description}
            id={carouselItem.id}
          />
          {/* <article
            className="card flex flex-col flex-auto"
            style={{
              backgroundImage: `url(${carouselItem.imageLink})`
            }}
          >
            <div className="carousel__item-bottom">
              <Paragraph className="carousel__item-seasons mb-1.5">
                {carouselItem.year}
              </Paragraph>

              <Link to={ROUTES.VIEW_TITLE_BY_ID(carouselItem.id)}>
                <Heading level={3} className="carousel__item-title mb-2">
                  {carouselItem.name}
                </Heading>
              </Link>

              <StarRating />

              <Paragraph className="carousel__item-text mt-3 line-clamp-3">
                {carouselItem.description}
              </Paragraph>
            </div>
          </article> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
