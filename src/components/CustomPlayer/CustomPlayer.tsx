import React, { useEffect, useRef, useState } from 'react';
import { toFormattedTime } from '@helpers/getDateFromSeconds';
import { fetchVideoPlayer } from '@helpers/fetchVideoPlayer';
import { SavedPlayerInfo } from '../../interfaces/SavedPlayerInfo.interface';

import { Select } from '@components/Select/Select';
import { Item } from 'react-aria-components';

export const CustomPlayer = () => {
  const [info, setInfo] = useState<SavedPlayerInfo>();
  const [seasons, setSeasons] = useState<{ season: number }[]>();
  const [season, setSeason] = useState<React.Key>(1);

  const [episodes, setEpisodes] = useState<{ episode: number }[]>();
  const [episode, setEpisode] = useState<React.Key>(1);
  const [startTime, setStartTime] = useState(0);

  const [isPlayerLoading, setIsPlayerLoading] = useState(true);
  const saveHolderRef = useRef<HTMLDivElement>(null);

  const fetchVideoPlayerData = async () => {
    setIsPlayerLoading(true);

    const { info } = await fetchVideoPlayer({
      season,
      episode,
      startTime
    });

    setSeasons(
      new Array(info.seasons)
        .fill(null)
        .map((item, index) => ({ season: index + 1 }))
    );
    setEpisodes(
      new Array(info.episodes)
        .fill(null)
        .map((item, index) => ({ episode: index + 1 }))
    );

    setInfo(info);

    setIsPlayerLoading(false);
  };

  const showSavedTitle = () => {
    if (saveHolderRef.current) {
      saveHolderRef.current.style.display = 'none';
    }

    if (info) {
      setEpisode(info.e);
      setSeason(info.s);
      setStartTime(info.time ? info.time : 0.01);
    }
  };

  useEffect(() => {
    fetchVideoPlayerData();
  }, [season, episode, startTime]);

  return (
    <div className="player-container relative aspect-video">
      <div className="flex align-middle gap-1.5 w-full absolute z-[8] top-[10px] left-[10px]">
        <Select
          label="Виберіть сезон"
          items={seasons}
          selectedKey={season}
          isLoading={isPlayerLoading || !seasons}
          onSelectionChange={(selected) => {
            setStartTime(0);
            setSeason(selected);
          }}
        >
          {(item) => (
            <Item textValue={item.season.toString()} id={item.season}>
              Сезон {item.season}
            </Item>
          )}
        </Select>

        <Select
          label="Виберіть епізод"
          items={episodes}
          selectedKey={episode}
          isLoading={isPlayerLoading || !episodes}
          onSelectionChange={(selected) => {
            setEpisode(selected);
            setStartTime(0);
          }}
        >
          {(item) => (
            <Item textValue={item.episode.toString()} id={item.episode}>
              Серія {item.episode}
            </Item>
          )}
        </Select>
      </div>

      <div
        id="save-holder"
        ref={saveHolderRef}
        className="save_holder ml-[50%] -translate-x-1/2 bottom-[60px]"
      >
        {!isPlayerLoading ? (
          <>
            <button
              className="mb-2 px-5 py-2 bg-amber-600 text-amber-50"
              onClick={showSavedTitle}
            >
              Продовжити перегляд з {toFormattedTime(info?.time || 0)}
            </button>

            <div className="save_holder_string">
              Сезон {info?.s} Серія {info?.e}
            </div>
          </>
        ) : null}
      </div>

      <div className="player" id="player" />
    </div>
  );
};
