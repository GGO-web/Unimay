import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import React from 'react';

interface TitleDescriptionProps {
  heading: string;
  paragraph: string;
}

export const TitleDescription: React.FC<TitleDescriptionProps> = ({
  heading,
  paragraph
}) => {
  return (
    <>
      <strong>
        <Heading className="text-xl mb-5">
          Про що мультсеріал &quot;{heading}&quot;:
        </Heading>
      </strong>
      <Paragraph className="mb-[63px]">{paragraph}</Paragraph>
    </>
  );
};
