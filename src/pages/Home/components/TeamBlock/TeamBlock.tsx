import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import React from 'react';
import TeamSlider from './TeamSlider/TeamSlider';

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

      <TeamSlider />
    </section>
  );
};
