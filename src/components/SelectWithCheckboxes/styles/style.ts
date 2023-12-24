import { StylesConfig } from 'react-select';

export const colourStyles: StylesConfig<any, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'black',
    color: 'white',
    border: 'none'
  }),
  input: (styles) => {
    return { ...styles, color: 'white' };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      boxShadow: '0 1px 2px rgba(0 0 0 / 0.1)',
      padding: '0.286rem 0.286rem 0.286rem 0.571rem',
      margin: '0px 2px',
      width: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      font: '1.072rem',
      borderRadius: '6px',
      minHeight: '35px',
      backgroundColor: isFocused ? '#df4c4c' : '#1d2d44',
      color: 'white',
      cursor: 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.label
            : '#df4c4c'
          : undefined
      }
    };
  },

  placeholder: (styles) => {
    return { ...styles, color: 'white' };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: '#df4c4c'
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white'
    }
  }),
  menu: (styles) => {
    return { ...styles, backgroundColor: '#1d2d44' };
  },

  clearIndicator: (styles) => {
    return { ...styles, cursor: 'pointer' };
  },

  dropdownIndicator: (styles) => {
    return { ...styles, cursor: 'pointer' };
  }
};
