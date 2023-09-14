import React from 'react';

import { Footer } from '@components/Footer/Footer';
import { BlogPreview } from '@components/BlogPreview/BlogPreview';
import { Carousel } from '@components/Carousel/Carousel';

import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';
import { Hero } from '@components/Hero/Hero';
import { Heading } from '@components/Heading/Heading';
import { Services } from './components/Services/Services';
import { TeamBlock } from './components/TeamBlock/TeamBlock';
import { Icon } from '@components/Icon/Icon';

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
              <Heading>Новинки</Heading>

              <Carousel />
            </div>
          </section>

          <section className="novelty">
            <div className="novelty__container container">
              <Heading>Новинки</Heading>

              <Carousel />
            </div>
          </section>

          <div className="container">
            <div className="two-blocks">
              <div className="left-block">
                <Heading>Блог</Heading>

                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
              </div>

              <div className="right-block">
                <Heading>Топ тижня</Heading>
                <Heading>Рекомендації</Heading>
              </div>
            </div>
          </div>

          <div className="container">
            <Services />
          </div>
          <div className="container">
            <TeamBlock />
          </div>
        </main>

        <Footer />
      </div>
    </section>
  );
}
