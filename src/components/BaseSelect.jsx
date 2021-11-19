import InputLabel from '@mui/material/InputLabel';
import Select from 'react-select';

const styles = {
  control: (base) => ({
    ...base,
    fontFamily: 'Roboto'
  }),
  menu: (base) => ({
    ...base,
    fontFamily: 'Roboto'
  })
};

export const BaseSelect = ({
  onChange,
  label,
  items = [],
  isClearable,
  placeholder
}) => (
  <>
    <InputLabel>{label}</InputLabel>
    <Select
      styles={styles}
      options={items}
      isClearable={isClearable}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
);
