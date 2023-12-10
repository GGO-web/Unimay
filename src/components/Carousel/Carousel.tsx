import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
