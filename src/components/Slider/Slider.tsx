import { Icon } from '@components/Icon/Icon';

import React, { ReactNode } from 'react';
import {
  MOBILE_POINT,
  MOBILE_SMALL_POINT,
  TABLET_POINT
} from '../../constants';
import { Swiper, SwiperRef, SwiperProps } from 'swiper/react';
import { useMediaQuery } from '@reactuses/core';
import { FreeMode } from 'swiper';

interface SliderProps {
  children: ReactNode;
  fullWidth?: boolean;
  swiperProps?: SwiperProps;
  enableFreeMode?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  children,
  fullWidth,
  swiperProps,
  enableFreeMode = true
}) => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const [isFirstSlide, setIsFirstSlide] = React.useState<boolean>(false);
  const [isLastSlide, setIsLastSlide] = React.useState<boolean>(true);
  const [slidePerView, setSlidePerView] = React.useState<number | 'auto'>(4);

  const sliderFreeModeMedia = useMediaQuery('(max-width: 768px)');

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
        style={{
          visibility: `${
            isFirstSlide && (!sliderFreeModeMedia || !enableFreeMode)
              ? 'visible'
              : 'hidden'
          }`
        }}
      >
        <Icon iconName="arrow-left" />
      </button>

      <Swiper
        {...swiperProps}
        slidesPerView={slidePerView}
        ref={swiperRef}
        modules={[FreeMode]}
        freeMode={sliderFreeModeMedia && enableFreeMode}
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
        style={{
          visibility: `${
            isLastSlide && (!sliderFreeModeMedia || !enableFreeMode)
              ? 'visible'
              : 'hidden'
          }`
        }}
      >
        <Icon iconName="arrow-right" />
      </button>
    </div>
  );
};
