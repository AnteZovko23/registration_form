import * as React from 'react';
// React component that displays a checkbox with a label, if the checkbox is checked, then it moves and another checkbox appears.
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import CoachMatchingQuestions from './CoachMatchingQuestions';
export default function Checkbox2() {

    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setChecked2(false);
        // Make checkbox with id 'no' disappear
        document.getElementById('no').style.display = 'none';
        // If unchecked, make checkbox with id 'no' appear
        if (checked === true) {
            document.getElementById('no').style.display = 'block';
        }
    };
    
    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
        setChecked(false);
    };

    const handleChange3 = (event) => {
        setChecked3(event.target.checked);
        setChecked4(false);
    
    };

    const handleChange4 = (event) => {
        setChecked4(event.target.checked);
        setChecked3(false);
        document.getElementById('yes').style.display = 'none';
        // If unchecked, make checkbox with id 'no' appear
        if (checked4 === true) {
            document.getElementById('yes').style.display = 'block';
        }
    };

    const handleChange5 = (event) => {
        setChecked5(event.target.checked);
        
    };
    
    return (
        <div>
        <FormGroup>
            <Typography variant="h6">Have you ever had a coach before?</Typography>
            <FormControlLabel
            control={
                <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
            }
            label="Yes"
            />
            <FormControlLabel
            id="no"
            control={
                <Checkbox
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ 'aria-label': 'controlled' }}
                />
            }
            label="No"
            />

            {checked === true && (
                <Typography variant="h6">Would you like the same coach?</Typography>)}

            {checked === true && (
                

            
                <FormControlLabel
                id="yes"
                control={
                    <Checkbox
                    checked={checked3}
                    onChange={handleChange3}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Yes"
                />
            )   
                }            

            {checked === true && (
                <FormControlLabel
                control={
                    <Checkbox
                    checked={checked4}
                    onChange={handleChange4}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="No"
                />
            )}

            {checked4 === true && (
                 <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px'}}/>
            )  }


            {checked4 === true && (
                <FormControlLabel
                control={
                    <Checkbox
                    checked={checked5}
                    onChange={handleChange5}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Check this box if you’d like to answer a short survey and be a part of our Coach
                Matching AI program"
                />
            )
                }

        {checked5 === true && (
            <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px'}}/>
            
            
            )}



        {checked5 === true && (
            <CoachMatchingQuestions />)}        

        </FormGroup>
        </div>
    );

}