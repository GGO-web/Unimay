import React, { ChangeEvent, useState } from 'react';

import { ListBoxItem } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { useQuery } from '@tanstack/react-query';
import { GenreService } from '@services/Genre/Genre.service';
import { TitleService } from '@services/Title/Title.service';
import { useNavigate } from 'react-router-dom';
import { useQueryState } from '@hooks/useQueryState';

export const Search = () => {
  const { data: newGenres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return GenreService.getAllGenres();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [search, setSearch] = useQueryState('search', '');
  const [genre, setGenre] = useQueryState('genre', '');

  const selectedGenre = newGenres?.find((g) => g.name === genre)?.id || null;

  const navigate = useNavigate();

  const { data: searchTitles, isLoading: isLoadingTitles } = useQuery({
    queryKey: ['titles', search, genre],
    queryFn: async () => {
      return TitleService.getAllTitles({
        search,
        genres: genre || ''
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
    const genreItem = newGenres?.find((g) => g.id === selected)?.name || '';

    if (genreItem === genre) {
      setGenre('');
    } else {
      setGenre(genreItem);
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
        <Select
          label="Виберіть епізод"
          items={newGenres}
          selectedKey={selectedGenre}
          placeholder="Виберіть жанр"
          bgNone
          maxWidth={250}
          isLoading={isGenreLoading}
          onSelectionChange={onSelectionGenre}
        >
          {({ name, id }: { name: string; id: number }) => (
            <ListBoxItem textValue={name} id={id}>
              {name}
            </ListBoxItem>
          )}
        </Select>
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
