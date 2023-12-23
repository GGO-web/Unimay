import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Genre } from '@services/Genre/interfaces/Genre.interface';
import { colourStyles } from './styles/style';

interface SelectWithCheckboxesProps {
  items: Genre[] | undefined;
}

export const SelectWithCheckboxes: React.FC<SelectWithCheckboxesProps> = ({
  items
}) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const animatedComponents = makeAnimated();

  const handleChange = (selectOptions: any) => {
    setSelectOptions(selectOptions);
  };

  return (
    <Select
      defaultValue={[]}
      isMulti
      name="genre"
      options={items?.map((item) => ({
        value: item.id,
        label: item.name,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      }))}
      components={animatedComponents}
      onChange={handleChange}
      className="basic-multi-select"
      classNamePrefix="select"
      styles={colourStyles}
      placeholder="Виберіть жанр..."
      noOptionsMessage={() => 'Не має такого жанра'}
    />
  );
};
