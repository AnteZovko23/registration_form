
import React from 'react';
import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, Typography, Tooltip, IconButton } from '@mui/material';
import BasicTooltip from './BasicTooltip';

// Create a my_checkbox component that renders two columns with two items each and only one item can be selected
export default function MyCheckbox_2() {
    // Make sure only one item can be checked at a time
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);


    const handleChange = (event) => {
        setChecked(event.target.checked);
        setChecked2(false);
        setChecked3(false);
    };

    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
        setChecked(false);
        setChecked3(false);
    };

    const handleChange3 = (event) => {
        setChecked3(event.target.checked);
        setChecked(false);
        setChecked2(false);
    };

    
    return (
       
                
        
        <FormGroup> 

            <Typography component="h1" variant="h6" align="left" marginBottom="15px" fontWeight="bold"> 
            Coaching Type (Choose One): 
            </Typography>
        
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                
                // eslint-disable-next-line react/jsx-no-duplicate-props
                label={<Typography variant="body1" color="text.primary">Coaching with EQ-i <BasicTooltip title={<Typography variant='body2'><b>Five (5) Coaching Sessions including the Emotional Quotient Inventory (EQ-i 2.0) Assessment </b> <br/> <br/>
                <ul><li>The EQ-I 2.0 is the industry standard on emotional intelligence</li>
                <li>Each participant receives a report detailing how to impact overall emotional intelligence to balance self-perception, stress management, self-expression, interpersonal, and decision making skills</li>
                <li>Coaches use the EQ-I 2.0 to help guide your coaching sessions
                </li>
                </ul></Typography>} /></Typography>}
            
            />
            <FormControlLabel
                control={<Checkbox checked={checked2} onChange={handleChange2} />}
                label={<Typography variant="body1" color="text.primary">Coaching Only <BasicTooltip title={<Typography variant='body2'><b>Five 5 Coaching Sessions Only (Does not include the EQ-I Assessment)</b></Typography>}></BasicTooltip></Typography>}
                labelPlacement="end"
            />  
            <FormControlLabel
                control={<Checkbox checked={checked3} onChange={handleChange3} />}
                label={<Typography variant="body1" color="text.primary">Opt-Out <BasicTooltip title={<Typography variant='body2'><b>Opt-Out and Do Not Receive Any Additional Developmental Opportunities (If you do not select any option, it is assumed that you are opting out entirely)</b></Typography>}></BasicTooltip></Typography>}
                labelPlacement="end"
                
            />
        </FormGroup>


    );

    }

    // <FormGroup>
    //         <Typography component="h1" variant="h6" align="left" marginBottom="15px" fontWeight="bold"> 
    //         Coaching Type (Choose One):
    //         </Typography>

    //         <Grid container spacing={2}>
                
    //             <Grid item xs={6}>
    //                 <FormControlLabel
    //                     control={<Checkbox checked={checked} onChange={handleChange} />}
    //                     label="Battalion Commander Assessment Program (BCAP24)"
    //                 />
    //             </Grid>
    //             <Grid item xs={6}>
    //                 <FormControlLabel
    //                     control={<Checkbox checked={checked2} onChange={handleChange2} />}
    //                     label="Acquisition Leader Assessment Program (ALAP24)"
    //                 />
    //             </Grid>
    //             <Grid item xs={6}>
    //                 <FormControlLabel
    //                     control={<Checkbox checked={checked3} onChange={handleChange3} />}
    //                     label="Acquisition Leader Assessment Program (ALAP24) "
    //                 />
    //             </Grid>
               
    //         </Grid>
    //     </FormGroup>