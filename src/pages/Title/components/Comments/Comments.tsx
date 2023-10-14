import React from 'react';
import { FormComment } from './FormComment/FormComment';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { Heading } from '@components/Heading/Heading';
import { COMMENTS } from '../../../../constants';

import { ListComments } from './ListComments/ListComments';

interface CommentsProps {}

export const Comments: React.FC<CommentsProps> = () => {
  const numСomments: number | undefined = COMMENTS.length;

  return (
    <section>
      <Heading className="pb-10">Коментарі ({numСomments || 0})</Heading>

      <FormComment isAuth={false} hideButtonCancel />
      {/* for NOT registered users */}

      {/* <FormComment isAuth={true} hideButtonCancel /> */}
      {/* for registered users */}

      {numСomments === 0 || numСomments === undefined ? (
        <Paragraph>Коментарів ще немає, будь першим!</Paragraph>
      ) : (
        <ListComments comments={COMMENTS} />
      )}
    </section>
  );
};
