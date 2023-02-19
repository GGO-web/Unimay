import React from 'react';

import {Footer} from '../../components/Footer';
import {BlogBlock} from '../../components/BlogBlock';
import {Carousel} from '../../components/Carousel/Carousel';
import {InstantSearch} from '../../components/Searchbar/InstantSearch.js';

import {Navigation} from '../../components/Navigation/Navigation';

export function Home() {
  return (
    <>
      <Navigation />

      <section className="home flex">
        <div className="home__container">
          <main>
            <section id="main-screen">
              <div className="search-block">
                <InstantSearch />
              </div>
            </section>

            <div className="container">
              <h2>Новинки</h2>
              <Carousel />
            </div>

            <div className="container">
              <h2>Новинки</h2>
              <Carousel />
            </div>

            <div className="container two-blocks">
              <div className="left-block">
                <h2>Блог</h2>
                <BlogBlock />
                <BlogBlock />
                <BlogBlock />
              </div>

              <div className="right-block">
                <h2>Топ тижня</h2>
                <h2>Рекомендації</h2>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </section>
    </>
  );
}
