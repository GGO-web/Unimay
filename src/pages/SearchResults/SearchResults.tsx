import React from 'react';

import { Heading } from 'react-aria-components';

import { ListTitles } from './components/ListTitles/ListTitles';

import { Header } from '@components/Header/Header';
import { Sidenav } from '@components/Navigation/Sidenav';
import { Search } from '@components/Searchbar/Search';
import { ExtraFilters } from '@components/Searchbar/ExtraFilters';
import { useQuery } from '@tanstack/react-query';
import { TitleService } from '@services/Title/Title.service';
import { Paragraph } from '@components/Paragraph/Paragraph';
import { NextSeasons } from '@pages/Title/components/NextSeasons/NextSeasons';
import { Recommendations } from '@pages/Title/components/Recommendations/Recommendations';
import { NEXT_ANIME, RECOMMENDATIONS_ANIME } from '@/constants';
import { useSearchParams } from 'react-router-dom';

export const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: newTitles } = useQuery({
    queryKey: ['titles'],
    queryFn: async () => {
      return TitleService.getAllTitles({
        search: searchParams.get('search') || '',
        genres: searchParams.get('genre') || ''
      });
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

            <Heading className="mb-[67px]">Результати пошуку... (12)</Heading>
          </div>
          <div className="container">
            <ListTitles items={newTitles} />

            <div className="search-results__footer ">
              <div className="search-results__footer-col-1">
                <strong>
                  <Heading className="text-xl mb-5">СЕО-ТЕКСТ</Heading>
                </strong>
                <Paragraph className="mb-[63px]">
                  {
                    " Мультфільм, який є продовженням однойменного серіалу, розповість про пригоди Джона Костянтина - приватного детектива, який володіє знаннями з окультизму і демонології та розслідує загадкові події, пов'язані з проявами потойбічних сил. Цього разу йому належить розібратися, що ж сталося з восьмирічною донькою старого друга по імені Чез, яка несподівано впала в кому. Незважаючи на ретельне обстеження,лікарі так і не змогли встановити причину, тому Чез абсолютно впевнений, що його дочка перебуває під впливом темної магії"
                  }
                </Paragraph>
              </div>

              <div className="search-results__footer-col-2">
                <NextSeasons anime={NEXT_ANIME} />
                <Recommendations anime={RECOMMENDATIONS_ANIME} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
