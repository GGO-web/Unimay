import React, { useState } from 'react';

import { ListBoxItem } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { useQuery } from '@tanstack/react-query';
import { GenreService } from '@services/Genre/Genre.service';
import { TitleService } from '@services/Title/Title.service';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const { data: newGenres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return GenreService.getAllGenres();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState<React.Key>(1);

  const navigate = useNavigate();

  const { data: searchTitles, isLoading: isLoadingTitles } = useQuery({
    queryKey: ['titles', search],
    queryFn: async () => {
      return TitleService.getAllTitles({
        search,
        genres: newGenres?.find((g) => g.id === genre)?.name || ''
      });
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [isGenreLoading] = useState(false);

  return (
    <div className="search">
      <div className="search__input ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
        onClick={() => {
          navigate(`/search?search=${search}&genre=${genre}`);
        }}
      >
        Пошук
      </button>
    </div>
  );
};
