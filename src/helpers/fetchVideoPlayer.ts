import { Key } from 'react';
import { SavedPlayerInfo } from '../interfaces/SavedPlayerInfo.interface';

interface FetchPlayerProps {
  url?: string;
  season?: Key;
  episode?: Key;
  startTime?: number;
}

interface FetchPlayerResponse {
  info: SavedPlayerInfo;
}

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const fetchVideoPlayer = async ({
  url = '',
  season = 1,
  episode = 10,
  startTime = 0
}: FetchPlayerProps = {}): Promise<FetchPlayerResponse> => {
  console.log('Fetching video...');
  const randomPoster = getRandomArbitrary(1, 5);
  return fetch(
    `${
      url
        ? url
        : 'https://voidboost.net/serial/8171b59d92582ed8eb7d17c9d6768660/iframe'
    }?s=${season}&e=${episode}&start=${startTime}&autoplay=${
      startTime !== 0 ? 1 : 0
    }&poster=1&poster_id=${randomPoster}&h=voidboost.net&plang=ua`
  )
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      const el = document.createElement('html');
      el.innerHTML = html;

      const bodyContent = el.lastElementChild;

      const scripts = bodyContent?.querySelectorAll('script');
      scripts?.forEach((script) => {
        script.setAttribute('data-name', 'video-script');
      });

      const scriptsToInsert = Array.from(scripts || []).slice(0, -1);

      const scriptsContainer = document.querySelector('.player-scripts');
      if (scriptsContainer) {
        scriptsContainer.innerHTML = '';
      }

      scriptsToInsert.forEach((scriptToInsert) => {
        const script = document.createElement('script');
        script.innerHTML = scriptToInsert.innerHTML;
        scriptsContainer?.appendChild(script);
      });

      const startFunctionIndex = html.indexOf('getCDNplayerCUID');
      const endFunctionIndex = html.indexOf('}', startFunctionIndex);
      const returnIndex = html.lastIndexOf('return', endFunctionIndex);
      const cuid = html.slice(returnIndex, endFunctionIndex).split("'")[1];

      const savedData = JSON.parse(
        localStorage.getItem(`save-${cuid}`) as string
      );

      const seasons = parseInt(
        (
          bodyContent?.querySelector(
            '#season-number option:last-child'
          ) as HTMLOptionElement
        )?.value
      );

      const episodes = parseInt(
        (
          bodyContent?.querySelector(
            '#episode-number option:last-child'
          ) as HTMLOptionElement
        )?.value
      );

      return {
        info: { ...savedData, cuid, seasons, episodes }
      };
    });
};
