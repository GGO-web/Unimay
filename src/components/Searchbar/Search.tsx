import React, { useState } from 'react';

import axios from 'axios';

import { Item } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { IJsonAlbum } from '../../types/album';
import { ANIME_GENRES } from '../../constants';

export const Search = () => {
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
        {search.length > 0 &&
          (isSearchLoading ? (
            <ul className="search__list">
              <li className="search__list-item">loading...</li>
            </ul>
          ) : (
            <ul className="search__list">
              {searchRes.map((res) => {
                return (
                  <li key={res.id} className="search__list-item">
                    {res.title}
                  </li>
                );
              })}
            </ul>
          ))}
      </div>

      <div className="search__select">
        <Select
          label="Виберіть епізод"
          items={ANIME_GENRES}
          selectedKey={genre}
          placeholder="Виберіть жанр"
          bgNone
          maxWidth={250}
          isLoading={isGenreLoading || !ANIME_GENRES}
          onSelectionChange={(selected) => {
            setGenre(selected);
          }}
        >
          {(item) => (
            <Item textValue={item.title} id={item.id}>
              {item.title}
            </Item>
          )}
        </Select>
      </div>
      <div className="search__button">
        <button className="button-style" type="button">
          Пошук
        </button>
      </div>
    </div>
  );
};
