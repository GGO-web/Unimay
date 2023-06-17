import React from 'react';

import { Footer } from '@components/Footer';
import { BlogPreview } from '@components/BlogPreview/BlogPreview';
import { Carousel } from '@components/Carousel/Carousel';

import { Header } from '@components/Header';
import { Sidenav } from '@components/Navigation/Sidenav';
import { Hero } from '@components/Hero/Hero';

export function Home() {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />

        <Sidenav />

        <main className="main">
          <Hero />

          <section className="novelty">
            <div className="novelty__container container">
              <h2 className="heading">Новинки</h2>
              <Carousel />
            </div>
          </section>

          <section className="novelty">
            <div className="novelty__container container">
              <h2 className="heading">Новинки</h2>
              <Carousel />
            </div>
          </section>

          <div className="container">
            <div className="two-blocks">
              <div className="left-block">
                <h2 className="heading">Блог</h2>

                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
              </div>

              <div className="right-block">
                <h2 className="heading">Топ тижня</h2>
                <h2 className="heading">Рекомендації</h2>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </section>
  );
}
