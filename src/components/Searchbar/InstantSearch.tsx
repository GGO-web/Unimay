import React, { useState } from 'react';

import axios from 'axios';

import { Item } from 'react-aria-components';
import { Select } from '@components/Select/Select';
import { IJsonAlbum } from '../../types/album';
import { ANIME_GENRES } from '../../constants';

export const InstantSearch = () => {
  const [posts, setPosts] = React.useState<IJsonAlbum[]>([]);

  const [search, setSearch] = useState('');

  const [genr, setGenr] = useState<React.Key>(1);
  const [isGenreLoading, setIsGenreLoading] = useState(false);

  const filterSearch = search.toLowerCase() || '';

  const searchRes = posts.filter((post) => {
    const finalRes = post.title.toLowerCase();

    return RegExp(filterSearch, 'gi').test(finalRes);
  });

  const onLsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    await axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('Could not get');
        }
      });
  };

  return (
    <div className="searchModule">
      <div className="searchModule__input ">
        <input
          value={search}
          onChange={(e) => onLsChange(e)}
          type="text"
          placeholder="Почніть вводити назву..."
        />

        <ul>
          {searchRes.map((res) => {
            return <li key={res.id}>{res.title}</li>;
          })}
        </ul>
      </div>

      <div className="searchModule__select">
        <Select
          label="Виберіть епізод"
          items={ANIME_GENRES}
          selectedKey={genr}
          placeholder="Виберіть жанр"
          bgNone
          maxWidth={250}
          isLoading={isGenreLoading || !ANIME_GENRES}
          onSelectionChange={(selected) => {
            setGenr(selected);
          }}
        >
          {(item) => (
            <Item textValue={item.title} id={item.id}>
              {item.title}
            </Item>
          )}
        </Select>
      </div>

      <button
        style={{ height: '54px' }}
        className="button-style searchModule__button"
        type="button"
      >
        Пошук
      </button>
    </div>
  );
};
