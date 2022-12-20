import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [selected_preferred_email, setSelectedState] = React.useState('');

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };


return (

<FormControl required sx={{ minWidth: 350 }}>
<InputLabel id="preferred_email_dropdown_label">Preferred Email Address</InputLabel>
<Select
    labelId="preferred_email_dropdown"
    id="preferred_email_dropdown"
    value={selected_preferred_email}
    label="Preferred Email Address"
onChange={handleChange}
>
    <MenuItem value="Personal">Personal</MenuItem>
    <MenuItem value="Work">Work</MenuItem>

</Select>
</FormControl>

);
}