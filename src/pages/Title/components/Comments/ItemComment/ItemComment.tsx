import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { getIconUrl } from '@helpers/getIconUrl';
import React from 'react';

interface ItemCommmentProps {
  isAuth: boolean; // whether the User is authorized
}

export const ItemCommment: React.FC<ItemCommmentProps> = ({ isAuth }) => {
  const userOrGuest = isAuth ? 'Користувач' : 'Гість';

  return (
    <div className="item-comment">
      <div className="item-comment__avatar">
        <img src={getIconUrl('user-unimay.svg')} alt="avatar" />
      </div>

      <Paragraph className="item-comment__user-name" size="xl">
        Polunina Daria
      </Paragraph>
      <p className="item-comment__type-user">{userOrGuest}</p>
      <div className="item-comment__message-block">
        <Paragraph size="lg">
          Дуже класний мульт,на рівні з фільмом 2005!
        </Paragraph>
      </div>
      <footer className="item-comment__footer">
        <div className="item-comment__footer-more">
          <img src={getIconUrl('arrow-down.svg')} alt="icon" />
          <button>Розгорнути відповіді</button>
        </div>
        <div className="item-comment__footer-answer">
          <div className="answer__counter-block">
            <img src={getIconUrl('message-comment.svg')} alt="icon" />
            <Paragraph>0</Paragraph>
          </div>
          <button>Відповісти</button>
        </div>
      </footer>
    </div>
  );
};
