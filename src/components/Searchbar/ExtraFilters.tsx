import React from 'react';

import { Select } from '@components/Select/Select';
import { ANIME_YEARS } from '../../constants';
import { Item } from 'react-aria-components';
import { Paragraph } from '@components/Paragraph/Paragraph';

import { SubmitHandler, useForm } from 'react-hook-form';
import { SliderIMDB } from '@components/SliderIMDB/SliderIMDB';
import Switch from '@components/Switch/Switch';

interface ExtraFiltersProps {}

export const ExtraFilters: React.FC<ExtraFiltersProps> = () => {
  const [year, setYear] = React.useState<React.Key>(1);
  const [isYearLoading, setIsYearLoading] = React.useState(false);
  const [grade, setGrade] = React.useState([5, 8.8]);
  const [isMovie, setIsMovie] = React.useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues
  } = useForm<Inputs>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="extra-filters">
      <button type="button" className="extra-filters__close" />
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

      <div
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
            value={grade[0]}
            {...register('minValueIMDB')}
          />
          <span className="inputs-block__space" />
          <input
            className="inputs-block__max-value"
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={grade[1]}
            {...register('maxValueIMDB')}
          />
        </div>

        <SliderIMDB
          value={grade}
          onChange={setGrade}
          minValue={0}
          maxValue={10}
          step={0.1}
        />
      </div>

      <Switch onChange={setIsMovie}>
        <Paragraph size="lg">Фільм / Серіал</Paragraph>
      </Switch>

      <div className="extra-filters__buttons">
        <button type="button" className="extra-filters__buttons-clean">
          Очистити
        </button>

        <button
          type="submit"
          className="button-style extra-filters__buttons-ok"
        >
          ОК
        </button>
      </div>
    </form>
  );
};
