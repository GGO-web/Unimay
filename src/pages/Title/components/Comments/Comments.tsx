import React from 'react';
import { FormComment } from './FormComment/FormComment';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { Heading } from '@components/Heading/Heading';
import { COMMENTS } from '../../../../constants';

import { ListComments } from './ListComments/ListComments';

interface CommentsProps {}

export const Comments: React.FC<CommentsProps> = () => {
  return (
    <section>
      <Heading>Коментарі (100)</Heading>
      <Paragraph>Коментарів ще немає, будь першим!</Paragraph>
      <FormComment isAuth={false} hideButtonCancel />

      <ListComments comments={COMMENTS} />
    </section>
  );
};
