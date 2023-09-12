import React from 'react';
import { SERVICES_LIST } from '../../../../../constants';
import { ServicesCard } from './ServicesCard/ServicesCard';

interface ServicesListProps {}

export const ServicesList: React.FC<ServicesListProps> = () => {
  return (
    <div className="services-list">
      {SERVICES_LIST.map((card) => (
        <ServicesCard
          key={card.id}
          position={card.position}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};
