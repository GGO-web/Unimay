import React from 'react';

import { Heading } from 'react-aria-components';

import { ListTitles } from './components/ListTitles/ListTitles';

import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';
import { Search } from '@components/Searchbar/Search';
import { ExtraFilters } from '@components/Searchbar/ExtraFilters';
import { useQuery } from '@tanstack/react-query';
import { TitleService } from '@services/Title/Title.service';

export const SearchResults = () => {
  const { data: newTitles } = useQuery({
    queryKey: ['titles'],
    queryFn: async () => {
      return TitleService.getAllTitles();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });
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

            <Heading>Результати пошуку... (12)</Heading>
            <ListTitles items={newTitles} />
          </div>
        </main>
      </div>
    </section>
  );
};
