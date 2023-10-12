import React, {useState} from 'react';

import axios from 'axios';

import {IJsonAlbum} from '../../types/album';

export const InstantSearch = () => {
  const [posts, setPosts] = React.useState<IJsonAlbum[]>([]);

  const [search, setSearch] = useState('');

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
      <div className="container">
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

      <div className="container">
        <button className="button-style" type="button">Пошук</button>
      </div>      
    </div>
  );
};
