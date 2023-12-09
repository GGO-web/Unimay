import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import React from 'react';

interface TitleDescriptionProps {
  heading?: string;
  paragraph?: string;
}

export const TitleDescription: React.FC<TitleDescriptionProps> = ({
  heading,
  paragraph
}) => {
  const formatText = (text = '') => {
    if (!text) {
      return 'Тут мав бути крутий опис, але його вміст загубили';
    }

    // Split the text into sentences
    const sentences = text.split('. ');

    // Capitalize the first letter of each sentence
    const capitalizedSentences = sentences.map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });

    // Join the sentences back into a single string
    const result = capitalizedSentences.join('. ');

    return result;
  };

  return (
    <>
      <strong>
        <Heading className="text-xl mb-5">
          Про що мультсеріал &quot;{heading || 'Невідомий'}&quot;:
        </Heading>
      </strong>
      <Paragraph className="mb-[63px]">{formatText(paragraph)}</Paragraph>
    </>
  );
};
