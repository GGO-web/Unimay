import { Slider } from '@components/Slider/Slider';
import React from 'react';
import { TITLE_IMAGES } from '../../../../constants';
import { SwiperSlide } from 'swiper/react';

interface TitleImagesProps {}

export const TitleImages: React.FC<TitleImagesProps> = () => {
  return (
    <div>
      <Slider fullWidth>
        {TITLE_IMAGES.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <img src={image} alt="image" />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};
