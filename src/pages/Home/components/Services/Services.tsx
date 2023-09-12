import React from 'react';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { ServicesList } from './ServicesList/ServicesList';

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = () => {
  return (
    <>
      <Heading>Послуги</Heading>
      <Paragraph>
        Студії озвучення надають різноманітні послуги у зв'язку з озвученням
        аніме, фільмів, телесеріалів та інших відеоконтентів. Основні послуги,
        які надає “UnimayMedia”:
      </Paragraph>

      <ServicesList />
    </>
  );
};
