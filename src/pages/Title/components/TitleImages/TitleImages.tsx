import { Slider } from '@components/Slider/Slider';
import React from 'react';
import { TITLE_IMAGES, SWIPER_PROPS_1 } from '../../../../constants';
import { SwiperSlide } from 'swiper/react';

interface TitleImagesProps {}

export const TitleImages: React.FC<TitleImagesProps> = () => {
  return (
    <div>
      <Slider fullWidth swiperProps={SWIPER_PROPS_1}>
        {TITLE_IMAGES.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <img src={image} alt="image" />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};
