import React, { ChangeEvent, useState } from 'react';

import { ListBoxItem } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { useQuery } from '@tanstack/react-query';
import { GenreService } from '@services/Genre/Genre.service';
import { TitleService } from '@services/Title/Title.service';
import { useNavigate } from 'react-router-dom';
import { useQueryState } from '@hooks/useQueryState';
import { SelectWithCheckboxes } from '@components/SelectWithCheckboxes/SelectWithCheckboxes';

export const Search = () => {
  const { data: newGenres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return GenreService.getAllGenres();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [search, setSearch] = useQueryState('search', '');
  const [genre, setGenre] = useQueryState<number | null>('genre', null);

  const navigate = useNavigate();

  const { data: searchTitles, isLoading: isLoadingTitles } = useQuery({
    queryKey: ['titles', search, genre],
    queryFn: async () => {
      return TitleService.getAllTitles({
        search: search || '',
        genres: genre ? genre.toString() : ''
      });
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [isGenreLoading] = useState(false);
  const [showSearchResultsDropdown, setShowSearchResultsDropdown] =
    useState(false);

  const isSearchDisabled = isLoadingTitles || isGenreLoading;

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowSearchResultsDropdown(true);
  };

  const onSelectionGenre = (selected: React.Key) => {
    if (selected === genre) {
      setGenre(null);
    } else {
      setGenre(Number(selected));
    }
  };

  const onSelectSearchResult = (searchResult: string) => {
    setSearch(searchResult);
    setShowSearchResultsDropdown(false);
  };

  const onClickSearch = () => {
    navigate(`/search?search=${search}&genre=${genre || ''}`);
  };

  return (
    <div className="search">
      <div className="search__input ">
        <input
          value={search}
          onChange={onSearchChange}
          onFocus={() => {
            if (searchTitles && searchTitles.length > 0) {
              setShowSearchResultsDropdown(true);
            }
          }}
          onBlur={() =>
            setTimeout(() => setShowSearchResultsDropdown(false), 100)
          }
          type="text"
          placeholder="Почніть вводити назву..."
        />

        {showSearchResultsDropdown && (
          <ul className="search__list">
            {isLoadingTitles ? (
              <li className="search__list-item">loading...</li>
            ) : (
              searchTitles?.map((title) => {
                return (
                  <li
                    key={title.id}
                    onClick={() => onSelectSearchResult(title.name)}
                    className="search__list-item"
                  >
                    {title.name}
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>

      <div className="search__select">
        <SelectWithCheckboxes items={newGenres} />
      </div>

      <button
        className="button-style search__button"
        disabled={isSearchDisabled}
        onClick={onClickSearch}
      >
        Пошук
      </button>
    </div>
  );
};
