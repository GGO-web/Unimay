import React from 'react';

import { Select } from '@components/Select/Select';
import { ANIME_YEARS } from '../../constants';
import { Item } from 'react-aria-components';
import { Paragraph } from '@components/Paragraph/Paragraph';

import { SubmitHandler, useForm } from 'react-hook-form';
import { SliderIMDB } from '@components/SliderIMDB/SliderIMDB';

interface ExtraFiltersProps {}

export const ExtraFilters: React.FC<ExtraFiltersProps> = () => {
  const [year, setYear] = React.useState<React.Key>(1);
  const [isYearLoading, setIsYearLoading] = React.useState(false);
  const [value, setValue] = React.useState([5, 8.8]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues
  } = useForm<Inputs>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="extra-filters">
      <button className="extra-filters__close"></button>
      <div className="extra-filters__year-block">
        <Paragraph size="lg">Рік</Paragraph>

        <Select
          label="Виберіть епізод"
          items={ANIME_YEARS}
          selectedKey={year}
          placeholder="Виберіть рік"
          bgNone
          maxWidth={250}
          isLoading={isYearLoading}
          onSelectionChange={(selected) => {
            setYear(selected);
          }}
        >
          {(item) => (
            <Item textValue={item.year.toString()} id={item.id}>
              {item.year}
            </Item>
          )}
        </Select>
      </div>

      <form
        className="extra-filters__rating-block"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Paragraph size="lg">Рейтинг IMDB</Paragraph>

        <div className="inputs-block">
          <input
            className="inputs-block__min-value"
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={value[0]}
            {...register('minValueIMDB')}
          />
          <span className="inputs-block__space" />
          <input
            className="inputs-block__max-value"
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={value[1]}
            {...register('maxValueIMDB')}
          />
        </div>

        <SliderIMDB
          value={value}
          onChange={setValue}
          minValue={0}
          maxValue={10}
          step={0.1}
        />
      </form>
    </div>
  );
};
