import React, {Component} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';

import {StarRating} from '../Rating/Rating';

import {carouselItems} from '../../constants';

// import './owl.css';

export class Carousel extends Component {
  render() {
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView="auto"
      >
        {carouselItems.map((carouselItem) => (
          <SwiperSlide
            key={carouselItem.id}
            className="carousel__item"
            style={{
              backgroundImage: `url(${carouselItem.image})`,
            }}
          >
            <div className="carousel__item-bottom">
              <p className="carousel__item-seasons paragraph3">
                {carouselItem.seasons} сезони, {carouselItem.year}
              </p>

              <h3 className="carousel__item-title heading3">
                {carouselItem.title}
              </h3>

              <StarRating />

              <p className="carousel__item-text paragraph3">
                {carouselItem.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

export default Carousel;
