import React, { useState } from 'react';

import axios from 'axios';

import { ListBoxItem } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { IJsonAlbum } from '@/types/album';
import { useQuery } from '@tanstack/react-query';
import { GenreService } from '@services/Genre/Genre.service';
import { TitleService } from '@services/Title/Title.service';
import { Link } from 'react-router-dom';

export const Search = () => {
  const { data: newGenres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return GenreService.getAllGenres();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const { data: newTitles } = useQuery({
    queryKey: ['titles'],
    queryFn: async () => {
      return TitleService.getAllTitles();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  const [posts, setPosts] = React.useState<IJsonAlbum[]>([]);

  const [search, setSearch] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const [genre, setGenre] = useState<React.Key>(1);
  const [isGenreLoading] = useState(false);

  const filterSearch = search.toLowerCase() || '';

  const searchRes = posts.filter((post) => {
    const finalRes = post.title.toLowerCase();

    return RegExp(filterSearch, 'gi').test(finalRes);
  });

  const onLsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsSearchLoading(true);
    if (newTitles && newTitles?.length !== 0) {
      const seriesNames: IJsonAlbum[] = newTitles.map(({ name, id }) => {
        return {
          id: +id,
          title: name,
          userId: 1
        };
      });
      setPosts(seriesNames);
      setIsSearchLoading(false);
    }
  };

  return (
    <div className="search">
      <div className="search__input ">
        <input
          value={search}
          onChange={(e) => onLsChange(e)}
          type="text"
          placeholder="Почніть вводити назву..."
        />
        {search.length > 0 && (
          <ul className="search__list">
            {isSearchLoading ? (
              <li className="search__list-item">loading...</li>
            ) : (
              searchRes.map((res) => {
                return (
                  <li
                    key={res.id}
                    onClick={() => {
                      setSearch(res.title);
                      setPosts([]);
                    }}
                    className="search__list-item"
                  >
                    {res.title}
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

      <Link to={'/search'}>
        <button className="button-style search__button" type="button">
          Пошук
        </button>
      </Link>
    </div>
  );
};
