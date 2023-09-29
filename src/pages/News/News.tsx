import React from 'react';

import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { Heading } from '@components/Heading/Heading';

import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs';
import { Sidenav } from '@components/Navigation/Sidenav';
import { NEWS_BREADCRUMBS } from '../../constants';

export const News = () => {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />

        <Sidenav />

        <main className="main">
          <section className="team">
            <div className="team__container container">
              <Breadcrumbs items={NEWS_BREADCRUMBS} />
              <Heading className="mb-[52px]">Новини</Heading>

              
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </section>
  );
};
