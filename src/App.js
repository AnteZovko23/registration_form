import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Img from './army_logo.png';
import Checkbox2 from './Checkbox.js';
import Checkbox3 from './Checkbox2.js';
import BasicTooltip from './BasicTooltip';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import StateDropdown from './StateDropdown.js';
import CountryDropdown from './CountryDropdown.js';
import PreferredEmail from './Dropdown3.js';
import PreferredPhone from './Dropdown4.js';
import CoachMatching from './CoachMatching.js';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Enlighteneering, Inc. 
      {" " + new Date().getFullYear()}
      {''}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    console.log(data.length);
    for(var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ></Box>
        {/* center img */}
            <img src={Img} alt="army logo" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
          <Typography component="h1" variant="h4" align="center">
            ARMY COACHING PROGRAM SERVICES
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
  {/* Horizontal line with more space top and bottom */}
  {/*TODO */}
  {/* The coach will attempt to contact you on your personal phone and email */}
              <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '20px', marginBottom: '30px'}}/>


              <Checkbox2 />

            {/* Horizontal line with more space top and bottom */}
            <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px'}}/>

              <Checkbox3 />

            <Typography component="h1" variant="h6" align="left" marginBottom="15px" marginTop='25px'> 
            EQ-i Assessment:
            </Typography>

              <FormGroup>
              <FormControlLabel
              control={<Checkbox />} label="Check Here If you have had an EQ-I Assessment in the last 9 months" />
              </FormGroup>


            <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px'}}/>

            <Typography component="h1" variant="h6" align="left" marginBottom="15px" marginTop='25px' fontWeight="bold">
              Coach Matching:
            </Typography>

            <CoachMatching />

            <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px'}}/>


            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  autoComplete="Middle Initial"
                  name="Middle Initial"
                  fullWidth
                  id="Middle Initial"
                  label="Middle Initial"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="Preferred Name"
                  label="Preferred Name"
                  name="Preferred Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  style={{width: '90%'}}
                  id="Duty Location"
                  label="Duty Location"
                  name="Duty Location"
                /> <BasicTooltip title="List post, base, region, etc."/>
              </Grid>
              <Grid item xs={12} sm={2.3}>
                <TextField
                  required
                  fullWidth
                  id="City"
                  label="City"
                  name="City"
              />
              </Grid>
              <Grid item xs={12}>
              <StateDropdown 
                />
              </Grid>

              <Grid item xs={12}>
                <CountryDropdown 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Work Email"
                  label="Work Email"
                  name="Work Email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Personal Email"
                  label="Personal Email"
                  name="Personal Email"
                />
              </Grid>

              <Grid item xs={12}>
                <PreferredEmail />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="Office Phone Number"
                  label="Office Phone Number"
                  name="Office Phone Number"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="Mobile Mobile Phone Number"
                  label="Mobile Phone Number"
                  name="Mobile Phone Number"
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="Home Phone Number"
                  label="Home Phone Number"
                  name="Home Phone Number"
                />
              </Grid>

              <Grid item xs={12}>
                <PreferredPhone />
              </Grid>

            </Grid>

            <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor: 'black', marginTop: '30px', marginBottom: '30px'}}/>
          

            <Typography component="h1" variant="h6" align="left" marginBottom="15px" marginTop='25px'> 
            <b>Note:
            <br></br>
            What to Remember About the Army Coaching Program:</b>
            <ul>
              <li>All Coaching sessions are  <i><b>CONFIDENTIAL</b></i>; only your attendance information is provided to the Army</li>
              <li>Coaches <i><b>WILL NOT</b></i> have access to your assessment data completed by the assessment team.  You will only receive your EQ-I assessment from the assigned coach. </li>

            </ul>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}