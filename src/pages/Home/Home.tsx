import React from 'react';

import {Footer} from '../../components/Footer';
import {BlogBlock} from '../../components/BlogBlock';
import {Carousel} from '../../components/Carousel/Carousel';
import {InstantSearch} from '../../components/Searchbar/InstantSearch.js';

import {Topnav} from '../../components/Navigation/Topnav';
import {Sidenav} from '../../components/Navigation/Sidenav';

export function Home() {
  return (
    <section className="home page-section">
      <Sidenav />

      <div className="home__container page-section__container">
        <Topnav />

        <main className="main">
          <section id="main-screen">
            <div className="search-block">
              <InstantSearch />
            </div>
          </section>
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

                <BlogBlock />
                <BlogBlock />
                <BlogBlock />
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
