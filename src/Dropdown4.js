import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [selected_preferred_Phone, setSelectedState] = React.useState('');

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };


return (

<FormControl required sx={{ minWidth: 350 }}>
<InputLabel id="preferred_Phone_dropdown_label">Preferred Phone Number</InputLabel>
<Select
    labelId="preferred_Phone_dropdown"
    id="preferred_Phone_dropdown"
    value={selected_preferred_Phone}
    label="Preferred Email Number"
onChange={handleChange}
>
    <MenuItem value="Personal">Office</MenuItem>
    <MenuItem value="Work">Mobile</MenuItem>
    <MenuItem value="Work">Home</MenuItem>

</Select>
</FormControl>

);
}