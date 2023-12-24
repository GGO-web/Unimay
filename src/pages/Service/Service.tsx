import React from 'react';

import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { Heading } from '@components/Heading/Heading';
import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs';
import { Sidenav } from '@components/Navigation/Sidenav';

import { SERVICE_BREADCRUMBS } from '../../constants';
import { ServicesList } from '@pages/Home/components/Services/ServicesList/ServicesList';

export const Service = () => {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />

        <Sidenav />

        <main className="main">
          <section className="service">
            <div className="service__container container">
              <Breadcrumbs items={SERVICE_BREADCRUMBS} />
              <Heading className="mb-[52px]">Послуги</Heading>
              <ServicesList />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </section>
  );
};
