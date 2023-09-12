import { Button } from '@components/Button/Button';
import { Paragraph } from '@components/Paragraph/Paragraph';
import React from 'react';

interface ServicesCardProps {
  position: number;
  title: string;
  subtitle: string;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
  position,
  title,
  subtitle
}) => {
  return (
    <div className="services-card">
      <p className="services-card_position">{`0${position}`}</p>

      <div className="services-card_title text-xl">{title}</div>

      <Paragraph>{subtitle}</Paragraph>

      <div className="services-card_btn">
        <Button className={'button-style'}>Замовити</Button>
      </div>
    </div>
  );
};
