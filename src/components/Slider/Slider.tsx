import { Icon } from '@components/Icon/Icon';

import React, { ReactNode } from 'react';
import {
  MOBILE_POINT,
  MOBILE_SMALL_POINT,
  TABLET_POINT
} from '../../constants';
import { Swiper, SwiperRef, SwiperProps } from 'swiper/react';

interface SliderProps {
  children: ReactNode;
  fullWidth?: boolean;
  swiperProps?: SwiperProps;
}

export const Slider: React.FC<SliderProps> = ({
  children,
  fullWidth,
  swiperProps
}) => {
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
        {...swiperProps}
        slidesPerView={slidePerView}
        ref={swiperRef}
        onSlideChangeTransitionStart={(swiper) =>
          setIsFirstSlide(!swiper.isBeginning)
        }
        onSlideChangeTransitionEnd={(swiper) => setIsLastSlide(!swiper.isEnd)}
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
