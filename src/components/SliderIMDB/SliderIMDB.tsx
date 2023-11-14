import React from 'react';
import './styles/SliderIMDB.scss';
import type { SliderProps } from 'react-aria-components';
import { Slider, SliderTrack, SliderThumb } from 'react-aria-components';
import { FILTERS_MAX } from '../../constants';

interface SliderIMDBProps<T> extends SliderProps<T> {
  thumbLabels?: string[];
  minValue?: number;
  maxValue?: number;
  step?: number;
}

export function SliderIMDB<T extends number | number[]>({
  thumbLabels,
  minValue = FILTERS_MAX.min,
  maxValue = FILTERS_MAX.max,
  step = FILTERS_MAX.step,
  ...props
}: SliderIMDBProps<T>) {
  return (
    <Slider {...props} minValue={minValue} maxValue={maxValue} step={step}>
      <SliderTrack>
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb key={i} index={i} aria-label={thumbLabels?.[i]} />
          ))
        }
      </SliderTrack>
    </Slider>
  );
}
