import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import React from 'react';

import { Slider } from '@components/Slider/Slider';
import { SWIPER_PROPS_TEAM, TEAM_PERSONS } from '../../../../constants';
import { SwiperSlide } from 'swiper/react';
import { TeamPerson } from '@pages/Team/components/TeamPerson/TeamPerson';

interface TeamBlockProps {}

export const TeamBlock: React.FC<TeamBlockProps> = () => {
  return (
    <section className="team-block">
      <Heading>Команда</Heading>
      <Paragraph className="team-block_btn">Дивитися всі</Paragraph>
      <Paragraph>
        Студії озвучення надають різноманітні послуги у зв'язку з озвученням
        аніме, фільмів, телесеріалів та інших відеоконтентів. Основні послуги,
        які надає “UnimayMedia”:
      </Paragraph>

      <Slider swiperProps={SWIPER_PROPS_TEAM} enableFreeMode={false}>
        {TEAM_PERSONS.map((person) => (
          <SwiperSlide key={person.name}>
            <TeamPerson person={person} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};
