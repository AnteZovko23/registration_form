import * as React from 'react';
// React component that displays a checkbox with a label, if the checkbox is checked, then it moves and another checkbox appears.
import {FormControl, TextField, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import CoachMatchingQuestions from './CoachMatchingQuestions';

export default function Checkbox2() {

    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);


    const [checked100, setChecked100] = React.useState(false);
    const [checked200, setChecked200] = React.useState(false);
    const [checked300, setChecked300] = React.useState(false);
    const [checked400, setChecked400] = React.useState(false);
    const [checked500, setChecked500] = React.useState(false);  
    const [checked600, setChecked600] = React.useState(false);
    const [checked700, setChecked700] = React.useState(false);
    

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


    const handleChange100 = (event) => {
        setChecked100(event.target.checked);
        setChecked200(false);
        document.getElementById("no_no").style.display = "none";
        if (checked100 === true) {
            document.getElementById("no_no").style.display = "block";
        }
    
    };
    
    const handleChange200 = (event) => {
        setChecked200(event.target.checked);
        setChecked100(false);
    
    
    };
    
    const handleChange300 = (event) => {
        setChecked300(event.target.checked);
        setChecked400(false);
    setChecked500(false);
    setChecked600(false);
    setChecked700(false);
    };
    
    const handleChange400 = (event) => {
        setChecked400(event.target.checked);
        setChecked300(false);
        setChecked500(false);
        setChecked600(false);
        setChecked700(false);
    };
    
    const handleChange500 = (event) => {
        setChecked500(event.target.checked);
        setChecked300(false);
        setChecked400(false);
        setChecked600(false);
        setChecked700(false);
    };
    
    const handleChange600 = (event) => {
        setChecked600(event.target.checked);
        setChecked300(false);
        setChecked400(false);
        setChecked500(false);
        setChecked700(false);
    }; 
    
    const handleChange700 = (event) => {
        setChecked700(event.target.checked);
        setChecked300(false);
        setChecked400(false);
        setChecked500(false);
        setChecked600(false);
    };
    
    
    return (
        <div>
        <FormGroup>
            <Typography variant="h6">Have you ever had an ACP coach before?</Typography>
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
                
                    <FormControl>
                        <Typography variant="h6">What was your experience like?</Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked300}
                                    onChange={handleChange300}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Extraordinary"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked400}
                                    onChange={handleChange400}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Exceeded expectations"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked500}  
                                    onChange={handleChange500}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Fully Met expectations"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked600}
                                    onChange={handleChange600}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Slightly met expectations"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked700}
                                    onChange={handleChange700}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Did not meet expectations"
                        />
                        <FormControlLabel
                            control={
        
                                <TextField
                                // Full width text field          
                                fullWidth
                                id="outlined-basic"
                                label="Explain how you rated your experience"
                                variant="outlined"
                                multiline
                                rows={4}
                                    
                                />
                            }
                        />
        
                    
                        
        
                    </FormControl>
        
                    
                )
            }

                

            {checked === true && (
                <div>
                    <br></br>
                <Typography variant="h7">Coach Name: </Typography>
                <input type="text" name="coachName" />
                <br></br>
                <br></br>
                </div>
            )}  
         
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