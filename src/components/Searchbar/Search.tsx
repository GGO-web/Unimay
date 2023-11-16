import React, { useState } from 'react';

import axios from 'axios';

import { Item } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { IJsonAlbum } from '../../types/album';
import { useQuery } from '@tanstack/react-query';
import { GenreService } from '@services/Genre/Genre.service';

export const Search = () => {
  const { data: newGenres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return GenreService.getAllGenres();
    },
    staleTime: 1000 * 60 * 60 // 60 minutes caching
  });

  console.log(newGenres);

  const [posts, setPosts] = React.useState<IJsonAlbum[]>([]);

  const [search, setSearch] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const [genre, setGenre] = useState<React.Key>(1);
  const [isGenreLoading, setIsGenreLoading] = useState(false);

  const filterSearch = search.toLowerCase() || '';

  const searchRes = posts.filter((post) => {
    const finalRes = post.title.toLowerCase();

    return RegExp(filterSearch, 'gi').test(finalRes);
  });

  const onLsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsSearchLoading(true);

    await axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => {
        setPosts(res.data);
        setIsSearchLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('Could not get');
          setIsSearchLoading(false);
        }
      });
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
                  <li key={res.id} className="search__list-item">
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
            <Item textValue={name} id={id}>
              {name}
            </Item>
          )}
        </Select>
      </div>

      <button className="button-style search__button" type="button">
        Пошук
      </button>
    </div>
  );
};
