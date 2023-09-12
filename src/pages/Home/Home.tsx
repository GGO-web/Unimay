import React from 'react';

import { Footer } from '@components/Footer/Footer';
import { BlogPreview } from '@components/BlogPreview/BlogPreview';
import { Carousel } from '@components/Carousel/Carousel';

import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';
import { Hero } from '@components/Hero/Hero';
import { Heading } from '@components/Heading/Heading';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { ServicesCard } from './components/ServicesCard';
import { SERVICES_LIST } from '../../constants';

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
            <Heading>Послуги</Heading>
            <Paragraph>
              Студії озвучення надають різноманітні послуги у зв'язку з
              озвученням аніме, фільмів, телесеріалів та інших відеоконтентів.
              Основні послуги, які надає “UnimayMedia”:
            </Paragraph>

            <div className="services-cards">
              {SERVICES_LIST.map((card) => (
                <ServicesCard
                  key={card.id}
                  position={card.position}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </section>
  );
}
