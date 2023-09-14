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

interface TeamSliderProps {}

const TeamSlider: React.FC<TeamSliderProps> = () => {
  const swiperRef = React.useRef<SwiperRef | any>(null); // delete the “any” type, how to solve the problem?
  const [slidePerView, setSlidePerView] = React.useState<
    1 | 2 | 3 | 4 | 'auto'
  >(4);

  React.useEffect(() => {
    function handleResize() {
      const widthWindow = window.innerWidth;
      if (
        widthWindow > TABLET_POINT &&
        widthWindow > MOBILE_POINT &&
        widthWindow > MOBILE_SMALL_POINT
      ) {
        setSlidePerView(4);
      }
      if (
        widthWindow < TABLET_POINT &&
        widthWindow > MOBILE_POINT &&
        widthWindow > MOBILE_SMALL_POINT
      ) {
        setSlidePerView(3);
      }
      if (
        widthWindow < TABLET_POINT &&
        widthWindow < MOBILE_POINT &&
        widthWindow > MOBILE_SMALL_POINT
      ) {
        setSlidePerView(2);
      }
      if (
        widthWindow < TABLET_POINT &&
        widthWindow < MOBILE_POINT &&
        widthWindow < MOBILE_SMALL_POINT
      ) {
        setSlidePerView(1); // "auto"
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="team-slider">
      <Icon
        iconName="arrow-left"
        className="team-slider_arrow-left"
        onClick={() => swiperRef.current.slidePrev()}
      />
      <Swiper
        spaceBetween={20} // should be 80, as in Figma layout
        grabCursor
        keyboard={{ enabled: true }}
        slidesPerView={slidePerView}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {TEAM_PERSONS.map((person) => (
          <SwiperSlide key={person.name}>
            <TeamPerson person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Icon
        iconName="arrow-right"
        className="team-slider_arrow-right"
        onClick={() => swiperRef.current.slideNext()}
      />
    </div>
  );
};

export default TeamSlider;
