import React from 'react';

import {Footer} from '../../components/Footer';
import {BlogBlock} from '../../components/BlogBlock';
import {Carousel} from '../../components/Carousel/Carousel';
import {InstantSearch} from '../../components/Searchbar/InstantSearch.js';

import {Sidenav} from '../../components/Navigation/Sidenav';
import {Topnav} from '../../components/Navigation/Topnav';

export function Home() {
  return (
    <section className="home page-section">
      <Sidenav />

      <div className="home__container flex">
        <Topnav />

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

          {/* <div className="container two-blocks">
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
          </div> */}
        </main>

        <Footer />
      </div>
    </section>
  );
}
