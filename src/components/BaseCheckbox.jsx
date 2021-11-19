import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const BaseCheckbox = ({ onChange, defaultValue, label }) => (
  <>
    <FormControlLabel
      control={<Checkbox onChange={onChange} defaultValue={defaultValue} />}
      label={label}
    />
  </>
);
