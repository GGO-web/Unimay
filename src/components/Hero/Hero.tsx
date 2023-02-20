import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade} from 'swiper';

import {InstantSearch} from '../Searchbar/InstantSearch';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <Swiper
          modules={[EffectFade]}
          fadeEffect={{
            crossFade: false,
          }}
          className="hero-carousel"
          slidesPerView={1}
        >
          <SwiperSlide className="hero-carousel__item flex">
            <img
              className="hero-carousel__image"
              src="/assets/main-bg.png"
              alt="Атака титанів"
            />
          </SwiperSlide>
          <SwiperSlide className="hero-carousel__item flex">
            <img
              className="hero-carousel__image"
              src="/assets/main-bg.png"
              alt="Атака титанів"
            />
          </SwiperSlide>
        </Swiper>

        <div className="hero__content">
          <h1 className="hero__title heading">
            <span>
              Unimay Media - це команда яка знає як запалити іскру в твоїх очах.
            </span>
          </h1>

          <p className="hero__text heading3">
            <span>
              Якісний дубляж аніме українською це те, що ти полюбиш з першого
              перегляду.
            </span>
          </p>
        </div>
      </div>

      <div className="search-block">
        <InstantSearch />
      </div>
    </section>
  );
};
