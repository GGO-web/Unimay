import React from 'react';

import { ItemCommment } from '../ItemComment/ItemComment';
import { IComments } from 'src/types/comments';

interface ListCommentsProps {
  comments: IComments[];
}

export const ListComments: React.FC<ListCommentsProps> = ({ comments }) => {
  return (
    <div className="list-comments">
      {comments.map((comment) => (
        <ItemCommment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
