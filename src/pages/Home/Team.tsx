import React from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading/Heading';

import { NavigationPage } from '@components/Navigation/NavigationPage';
import { Sidenav } from '@components/Navigation/Sidenav';

const navPageNames = [
  {
    name: 'Головна',
    link: '/'
  },
  {
    name: 'Команда',
    link: '/team'
  }
];

interface TeamProps {}

export const Team: React.FC<TeamProps> = () => {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />

        <Sidenav />

        <main className="main">
          <section className="novelty">
            <div className="novelty__container container">
              <NavigationPage navPageNames={navPageNames} />
              <Heading>КОМАНДА</Heading>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </section>
  );
};
