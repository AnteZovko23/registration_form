
import React from 'react';
import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';

// Create a my_checkbox component that renders two columns with two items each and only one item can be selected
export default function MyCheckbox() {
    // Make sure only one item can be checked at a time
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
        setChecked6(false);
    };

    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
        setChecked(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
        setChecked6(false);
    };

    const handleChange3 = (event) => {
        setChecked3(event.target.checked);
        setChecked(false);
        setChecked2(false);
        setChecked4(false);
        setChecked5(false);
        setChecked6(false);
    };

    const handleChange4 = (event) => {
        setChecked4(event.target.checked);
        setChecked(false);
        setChecked2(false);
        setChecked3(false);
        setChecked5(false);
        setChecked6(false);
    }
    const handleChange5 = (event) => {
        setChecked5(event.target.checked);
        setChecked(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked6(false);
    }
    const handleChange6 = (event) => {
        setChecked6(event.target.checked);
        setChecked(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
    }


    
    return (
       
                
        

        <FormGroup>
            {/* Centered label bold */}
            <Typography component="h1" variant="h6" align="left" marginBottom="15px" fontWeight="bold"> 
            Coaching Program (Choose one of the Options Below):
            </Typography>

            <Grid container spacing={2}>
                
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange} />}
                        label="Battalion Commander Assessment Program (BCAP24)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={checked2} onChange={handleChange2} />}
                        label="Acquisition Leader Assessment Program (ALAP24)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={checked3} onChange={handleChange3} />}
                        label="Sergeant Major Assessment Program (SMAP) "
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={checked4} onChange={handleChange4}/>}
                        label="Chaplains Assessment Program (DCHAP)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={checked5} onChange={handleChange5}/>}
                        label="Colonel Commander Assessment Program (CCAP 2024)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox checked={checked6} onChange={handleChange6}/>}
                        label="Medical Commanders Assessment Program
                        (MCAP)"
                    />
                </Grid>
            </Grid>
        </FormGroup>

    );

    }