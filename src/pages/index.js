import React from 'react';
import '../styles/home.scss';
import {Sidenav} from '../components/Sidenav';
import {Footer} from '../components/Footer';
import {Topnav} from '../components/Topnav';
import {BlogBlock} from '../components/BlogBlock';
import Carousel from '../components/Carousel';
import InstantSearch from '../components/InstantSearch';

export default function Index() {
  return (
    <div className="wrapper">
      <Topnav />
      <Sidenav />
      <main>
        <section id="main-screen">
          <div className="search-block">
            <InstantSearch />
          </div>
        </section>
        <div className="container">
          <h2>Новинки</h2>
          <Carousel></Carousel>
        </div>
        <div className="container">
          <h2>Новинки</h2>
          <Carousel></Carousel>
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
  );
}
