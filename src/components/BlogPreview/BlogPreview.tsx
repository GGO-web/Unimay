import React from 'react';

import { Link } from 'react-router-dom';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';

export const BlogPreview = () => {
  return (
    <article className="blog-preview">
      <img className="blog-preview__image" src="/img/films/blog-foto.png" />

      <div className="blog-preview__info">
        <time className="blog-preview__date paragraph3" dateTime="09.12.2022">
          09.12.2022
        </time>

        <Heading level={3} className="blog-preview__title heading3">
          Короля Шаманів зроблять по-новому!
        </Heading>

        <Paragraph className="blog-preview__text paragraph2">
          Зроблять вони це вже дуже скоро — старт нового серіалу буде у квітні
          цього року.Історія розповідає про людей, що бачать духів і можуть
          брати від них силу. Опис мабуть такий собі, але сюжет непростий...
        </Paragraph>

        <Link className="blog-preview__more" to="blog/1">
          Читати далі...
        </Link>
      </div>
    </article>
  );
};
