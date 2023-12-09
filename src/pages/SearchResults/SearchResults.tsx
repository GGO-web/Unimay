import React from 'react';

import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';
import { Search } from '@components/Searchbar/Search';
import { ExtraFilters } from '@components/Searchbar/ExtraFilters';

export const SearchResults = () => {
  const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);

  const togglePopup = (open: boolean) => {
    setIsOpenPopup(open);
  };
  return (
    <section className="search-results page-section">
      <div className="home__container page-section__container">
        <Header />
        <Sidenav />

        <main className="main">
          <div className="search-results__container container">
            <Search />

            <button
              className="search-block__button"
              onClick={() => togglePopup(true)}
            >
              Додаткові фільтри
            </button>
            {isOpenPopup && (
              <div className="search-block__filters">
                <ExtraFilters togglePopup={togglePopup} />
              </div>
            )}
          </div>
        </main>
      </div>
    </section>
  );
};
