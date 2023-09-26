import { Icon } from '@components/Icon/Icon';

import React, { ReactNode } from 'react';
import {
  MOBILE_POINT,
  MOBILE_SMALL_POINT,
  TABLET_POINT
} from '../../constants';
import { Swiper, SwiperRef } from 'swiper/react';

interface SliderProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export const Slider: React.FC<SliderProps> = ({ children, fullWidth }) => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const [isFirstSlide, setIsFirstSlide] = React.useState<boolean>(false);
  const [isLastSlide, setIsLastSlide] = React.useState<boolean>(true);
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
    <div className={`slider ${fullWidth ? 'full-slider' : ''}`}>
      <button
        onClick={prevElementSwiper}
        className="slider__arrow-left"
        style={{ visibility: `${isFirstSlide ? 'visible' : 'hidden'}` }}
      >
        <Icon iconName="arrow-left" />
      </button>

      <Swiper
        spaceBetween={20}
        grabCursor
        keyboard={{ enabled: true }}
        slidesPerView={slidePerView}
        ref={swiperRef}
        onSlideChangeTransitionStart={(swiper) =>
          setIsFirstSlide(!swiper.isBeginning)
        }
        onSlideChangeTransitionEnd={(swiper) => setIsLastSlide(!swiper.isEnd)}
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
        {children}
      </Swiper>

      <button
        onClick={nextElementSwiper}
        className="slider__arrow-right"
        style={{ visibility: `${isLastSlide ? 'visible' : 'hidden'}` }}
      >
        <Icon iconName="arrow-right" />
      </button>
    </div>
  );
};
