import React from 'react';

import { Select } from '@components/Select/Select';
import { ANIME_YEARS, FILTERS_MAX } from '@/constants';
import { ListBoxItem } from 'react-aria-components';
import { Paragraph } from '@components/Paragraph/Paragraph';

import { SliderIMDB } from '@components/SliderIMDB/SliderIMDB';
import Switch from '@components/Switch/Switch';

interface ExtraFiltersProps {
  togglePopup: (open: boolean) => void;
}

export const ExtraFilters: React.FC<ExtraFiltersProps> = ({ togglePopup }) => {
  const [year, setYear] = React.useState<React.Key>(1);
  const [isYearLoading] = React.useState(false);
  const [grade, setGrade] = React.useState<[number, number]>([0, 10]);
  const [isSeries, setIsSeries] = React.useState(true);

  const clearParameters = () => {
    const newGrade: [number, number] = [0, 10];
    setGrade(newGrade);
    setYear(0);
    setIsSeries(true);
  };

  const setGradeRange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isMin: boolean
  ) => {
    const newValue = +e.target.value;

    const newGrade: [number, number] = isMin
      ? [newValue, grade[1]]
      : [grade[0], newValue];

    setGrade(newGrade);
  };

  return (
    <form className="extra-filters">
      <button
        type="button"
        className="extra-filters__close"
        onClick={() => togglePopup(false)}
      />
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
            <ListBoxItem textValue={item.year.toString()} id={item.id}>
              {item.year}
            </ListBoxItem>
          )}
        </Select>
      </div>

      <div className="extra-filters__rating-block">
        <Paragraph size="lg">Рейтинг IMDB</Paragraph>

        <div className="inputs-block">
          <input
            className="inputs-block__min-value"
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={grade[0]}
            onChange={(e) => setGradeRange(e, true)}
          />
          <span className="inputs-block__space" />
          <input
            className="inputs-block__max-value"
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={grade[1]}
            onChange={(e) => setGradeRange(e, false)}
          />
        </div>

        <SliderIMDB
          value={grade}
          onChange={setGrade}
          minValue={FILTERS_MAX.min}
          maxValue={FILTERS_MAX.max}
          step={FILTERS_MAX.step}
        />
      </div>

      <Switch onChange={setIsSeries} isSelect={isSeries}>
        <Paragraph size="lg">Фільм / Серіал</Paragraph>
      </Switch>

      <div className="extra-filters__buttons">
        <button
          type="button"
          className="extra-filters__buttons-clean"
          onClick={clearParameters}
        >
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
