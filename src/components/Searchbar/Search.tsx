import React, { Key, useEffect, useState } from 'react';

import { ListBoxItem } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { useQuery } from '@tanstack/react-query';
import { GenreService } from '@services/Genre/Genre.service';
import { TitleService } from '@services/Title/Title.service';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: newGenres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return GenreService.getAllGenres();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [genre, setGenre] = useState<React.Key>(1);

  const genreItem = newGenres?.find((g) => g.id === genre);

  const navigate = useNavigate();

  const { data: searchTitles, isLoading: isLoadingTitles } = useQuery({
    queryKey: ['titles', search, genre],
    queryFn: async () => {
      return TitleService.getAllTitles({
        search,
        genres: genreItem?.name || ''
      });
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [isGenreLoading] = useState(false);

  const isSearchDisabled = isLoadingTitles || isGenreLoading || !genre;

  useEffect(() => {
    if (!newGenres || newGenres.length === 0) {
      return;
    }

    const genreIndex = newGenres?.find(
      (g) => g.name === searchParams.get('genre') || ''
    )?.id as Key;

    setGenre(genreIndex);
  }, [newGenres]);

  return (
    <div className="search">
      <div className="search__input ">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              search: e.target.value
            });
          }}
          type="text"
          placeholder="Почніть вводити назву..."
        />
        {search.length > 0 && (
          <ul className="search__list">
            {isLoadingTitles ? (
              <li className="search__list-item">loading...</li>
            ) : (
              searchTitles?.map((title) => {
                return (
                  <li
                    key={title.id}
                    onClick={() => {
                      setSearch(title.name);
                    }}
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
          selectedKey={genre}
          placeholder="Виберіть жанр"
          bgNone
          maxWidth={250}
          isLoading={isGenreLoading}
          onSelectionChange={(selected) => {
            setGenre(selected);
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              genre: newGenres?.find((g) => g.id === selected)?.name || ''
            });
          }}
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
        onClick={() => {
          navigate(`/search?search=${search}&genre=${genreItem?.name || ''}`);
        }}
      >
        Пошук
      </button>
    </div>
  );
};
