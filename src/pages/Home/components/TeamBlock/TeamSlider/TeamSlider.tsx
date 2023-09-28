import { TeamPerson } from '@pages/Team/components/TeamPerson/TeamPerson';
import React from 'react';
import {
  TABLET_POINT,
  MOBILE_POINT,
  MOBILE_SMALL_POINT,
  TEAM_PERSONS
} from '../../../../../constants';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Icon } from '@components/Icon/Icon';

const TeamSlider = () => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const [slidePerView, setSlidePerView] = React.useState<number | 'auto'>(4);

  const nextElementSwiper = () => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slideNext();
  };
  const prevElementSwiper = () => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div className="team-slider">
      <button onClick={prevElementSwiper}>
        <Icon iconName="arrow-left" className="team-slider_arrow-left" />
      </button>

      <Swiper
        spaceBetween={20}
        grabCursor
        keyboard={{ enabled: true }}
        slidesPerView={slidePerView}
        ref={swiperRef}
        breakpoints={{
          [TABLET_POINT]: {
            slidesPerView: 4
          },
          [MOBILE_POINT]: {
            slidesPerView: 3
          },
          [MOBILE_SMALL_POINT]: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
          }
        }}
      >
        {TEAM_PERSONS.map((person) => (
          <SwiperSlide key={person.name}>
            <TeamPerson person={person} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={nextElementSwiper}>
        <Icon iconName="arrow-right" className="team-slider_arrow-right" />
      </button>
    </div>
  );
};

export default TeamSlider;
