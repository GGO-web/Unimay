import React from 'react';

export const BlogBlock = () => {
  return (
    <article className="blog-block">
      <img src="../img/films/blog-foto.png" />
      <div className="blog-block__info">
        <span>09.12.2022</span>
        <h3>Король Шаманів зроблять по-новому!</h3>
        <p>
          Зроблять вони це вже дуже скоро — старт нового серіалу буде у квітні
          цього року.Історія розповідає про людей, що бачать духів і можуть
          брати від них силу. Опис мабуть такий собі, але сюжет непростий...
        </p>
        <a>Читати далі...</a>
      </div>
    </article>
  );
};
