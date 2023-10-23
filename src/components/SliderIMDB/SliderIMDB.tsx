import React from 'react';
import './styles/SliderIMDB.scss';
import type { SliderProps } from 'react-aria-components';
import {
  Slider,
  Label,
  SliderOutput,
  SliderTrack,
  SliderThumb
} from 'react-aria-components';

interface SliderIMDBProps<T> extends SliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function SliderIMDB<T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: SliderIMDBProps<T>) {
  return (
    <Slider {...props} minValue={0} maxValue={10} step={0.1}>
      <Label>{label}</Label>
      <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')
        }
      </SliderOutput>
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
