import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';

import {Link} from 'react-router-dom';

import {StarRating} from '../Rating/Rating';

import {carouselItems} from '../../constants';

export const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      grabCursor
      slidesPerView="auto"
    >
      {carouselItems.map((carouselItem) => (
        <SwiperSlide key={carouselItem.id} className="carousel__item">
          <article
            className="card flex"
            style={{
              backgroundImage: `url(${carouselItem.image})`,
            }}
          >
            <div className="carousel__item-bottom">
              <p className="carousel__item-seasons paragraph3">
                {carouselItem.seasons} сезони, {carouselItem.year}
              </p>

              <Link to={`/anime/${carouselItem.id}`}>
                <h3 className="carousel__item-title heading3">
                  {carouselItem.title}
                </h3>
              </Link>

              <StarRating />

              <p className="carousel__item-text paragraph3">
                {carouselItem.text}
              </p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
