import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { StarRating } from '@components/Rating/Rating';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, carouselItems, SWIPER_PROPS_2 } from '../../../../constants';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '@components/Slider/Slider';

interface SimilarAnimeProps {}

export const SimilarAnime: React.FC<SimilarAnimeProps> = () => {
  return (
    <section>
      <Slider fullWidth swiperProps={SWIPER_PROPS_2}>
        {carouselItems.map((carouselItem) => (
          <SwiperSlide key={carouselItem.id} className="carousel__item">
            <article
              className="card flex flex-col flex-auto"
              style={{
                backgroundImage: `url(${carouselItem.image})`
              }}
            >
              <div className="carousel__item-bottom">
                <Paragraph className="carousel__item-seasons mb-1.5">
                  {carouselItem.seasons} сезони, {carouselItem.year}
                </Paragraph>

                <Link to={ROUTES.VIEW_TITLE_BY_ID(carouselItem.id)}>
                  <Heading level={3} className="carousel__item-title mb-2">
                    {carouselItem.title}
                  </Heading>
                </Link>

                <StarRating />

                <Paragraph className="carousel__item-text mt-3">
                  {carouselItem.text}
                </Paragraph>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};
