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
  minValue?: number;
  maxValue?: number;
  step?: number;
}

export function SliderIMDB<T extends number | number[]>({
  label,
  thumbLabels,
  minValue = 0,
  maxValue = 0,
  step = 0.1,
  ...props
}: SliderIMDBProps<T>) {
  return (
    <Slider {...props} minValue={minValue} maxValue={maxValue} step={step}>
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
