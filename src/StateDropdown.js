import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [selected_state, setSelectedState] = React.useState('');

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };


return (

<FormControl sx={{ minWidth: 150 }}>
<InputLabel id="state_dropdown_label">State</InputLabel>
<Select
    labelId="state_dropdown"
    id="state_dropdown"
    value={selected_state}
    label="State"
onChange={handleChange}
>
    <MenuItem value="AL">Alabama</MenuItem>
    <MenuItem value="AK">Alaska</MenuItem>
    <MenuItem value="AZ">Arizona</MenuItem>    
    <MenuItem value="AR">Arkansas</MenuItem>
    <MenuItem value="CA">California</MenuItem>
    <MenuItem value="CO">Colorado</MenuItem>
    <MenuItem value="CT">Connecticut</MenuItem>

    <MenuItem value="DE">Delaware</MenuItem>
    <MenuItem value="DC">District Of Columbia</MenuItem>
    <MenuItem value="FL">Florida</MenuItem>
    <MenuItem value="GA">Georgia</MenuItem>
    <MenuItem value="HI">Hawaii</MenuItem>
    <MenuItem value="ID">Idaho</MenuItem>
    <MenuItem value="IL">Illinois</MenuItem>
    <MenuItem value="IN">Indiana</MenuItem>
    <MenuItem value="IA">Iowa</MenuItem>
    <MenuItem value="KS">Kansas</MenuItem>
    <MenuItem value="KY">Kentucky</MenuItem>
    <MenuItem value="LA">Louisiana</MenuItem>
    <MenuItem value="ME">Maine</MenuItem>
    <MenuItem value="MD">Maryland</MenuItem>
    <MenuItem value="MA">Massachusetts</MenuItem>
    <MenuItem value="MI">Michigan</MenuItem>
    <MenuItem value="MN">Minnesota</MenuItem>
    <MenuItem value="MS">Mississippi</MenuItem>
    <MenuItem value="MO">Missouri</MenuItem>
    <MenuItem value="MT">Montana</MenuItem>
    <MenuItem value="NE">Nebraska</MenuItem>
    <MenuItem value="NV">Nevada</MenuItem>
    <MenuItem value="NH">New Hampshire</MenuItem>
    <MenuItem value="NJ">New Jersey</MenuItem>
    <MenuItem value="NM">New Mexico</MenuItem>
    <MenuItem value="NY">New York</MenuItem>
    <MenuItem value="NC">North Carolina</MenuItem>
    <MenuItem value="ND">North Dakota</MenuItem>
    <MenuItem value="OH">Ohio</MenuItem>
    <MenuItem value="OK">Oklahoma</MenuItem>
    <MenuItem value="OR">Oregon</MenuItem>
    <MenuItem value="PA">Pennsylvania</MenuItem>
    <MenuItem value="RI">Rhode Island</MenuItem>
    <MenuItem value="SC">South Carolina</MenuItem>
    <MenuItem value="SD">South Dakota</MenuItem>
    <MenuItem value="TN">Tennessee</MenuItem>
    <MenuItem value="TX">Texas</MenuItem>
    <MenuItem value="UT">Utah</MenuItem>
    <MenuItem value="VT">Vermont</MenuItem>
    <MenuItem value="VA">Virginia</MenuItem>
    <MenuItem value="WA">Washington</MenuItem>
    <MenuItem value="WV">West Virginia</MenuItem>
    <MenuItem value="WI">Wisconsin</MenuItem>
    <MenuItem value="WY">Wyoming</MenuItem>
    

</Select>
</FormControl>

);
}