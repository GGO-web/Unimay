import { Paragraph } from '@components/Paragraph/Paragraph';
import { getIconUrl } from '@helpers/getIconUrl';
import React from 'react';
import { IComment } from 'src/types/comments';
import { FormComment } from '../FormComment/FormComment';

interface ItemCommmentProps {
  isAuth?: boolean;
  comment: IComment;
}

export const ItemCommment: React.FC<ItemCommmentProps> = ({
  comment,
  isAuth = false
}) => {
  const [showReplies, setShowReplies] = React.useState<boolean>(false);
  const [replie, setReplie] = React.useState<boolean>(false);

  const userOrGuest = comment.isAuth ? 'Користувач' : 'Гість';

  const showArrowUpOrDown = showReplies ? (
    <img
      src={getIconUrl('arrow-down.svg')}
      style={{ transform: 'rotate(-180deg)' }}
      alt="icon"
    />
  ) : (
    <img src={getIconUrl('arrow-down.svg')} alt="icon" />
  );

  const showFormComment = () => {
    setReplie(!replie);
  };

  return (
    <div className="item-comment">
      <div className="item-comment__avatar">
        <img src={getIconUrl('user-unimay.svg')} alt="avatar" />
      </div>

      <Paragraph className="item-comment__user-name" size="xl">
        {comment.user}
      </Paragraph>
      <p className="item-comment__type-user">{userOrGuest}</p>
      <div className="item-comment__message-block">
        <Paragraph size="lg">{comment.comment}</Paragraph>
      </div>
      <footer className="item-comment__footer">
        {comment.replies && comment.replies?.length > 0 && (
          <div className="item-comment__footer-more">
            {showArrowUpOrDown}
            <button onClick={() => setShowReplies(!showReplies)}>
              Розгорнути відповіді
            </button>
          </div>
        )}
        <div className="item-comment__footer-answer">
          <div className="answer__counter-block">
            <img src={getIconUrl('message-comment.svg')} alt="icon" />
            <Paragraph>{comment.replies?.length || 0}</Paragraph>
          </div>
          <button onClick={showFormComment}>Відповісти</button>
        </div>
      </footer>

      {replie &&
        (isAuth ? (
          <FormComment isAuth showFormComment={showFormComment} />
        ) : (
          <FormComment isAuth={false} showFormComment={showFormComment} />
        ))}

      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="replies" style={{ paddingLeft: '40px' }}>
          {comment.replies.map((reply) => (
            <ItemCommment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};
