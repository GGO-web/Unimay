import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import { Search } from '../Searchbar/Search';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { Button } from '@components/Button/Button';
import { ExtraFilters } from '@components/Searchbar/ExtraFilters';

export const Hero = () => {
  const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);

  const togglePopup = (open: boolean) => {
    setIsOpenPopup(open);
  };

  return (
    <section className="hero">
      <div className="hero__container container">
        <Swiper
          modules={[EffectFade]}
          fadeEffect={{
            crossFade: false
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
          <Heading level={1} className="hero__title mb-9">
            Вас вітає <strong>Unimay Media!</strong>
          </Heading>

          <Paragraph size={'lg'} className="hero__text mb-16">
            <strong>Unimay Media</strong> є однією з провідних компаній, що
            спеціалізується на локалізації та овученні аніме для україномовної
            аудиторії.
          </Paragraph>

          <Button className={'button-style'}>Приєднатися</Button>
        </div>
      </div>

      <div className="search-block">
        <Search />

        <button
          className="search-block__button"
          onClick={() => togglePopup(true)}
        >
          Додаткові фільтри
        </button>
        {isOpenPopup && (
          <div className="search-block__filters">
            <ExtraFilters togglePopup={togglePopup} />
          </div>
        )}
      </div>
    </section>
  );
};
