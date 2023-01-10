import { FormControl, FormGroup, TextField, Typography } from '@mui/material';
import * as React from 'react';
import {FormControlLabel, Checkbox} from '@mui/material';


export default function Checkbox_4() {



// Declare 37 constants for the 37 checkboxes
const [checked8, setChecked8] = React.useState(false);
const [checked9, setChecked9] = React.useState(false);
const [checked10, setChecked10] = React.useState(false);
const [checked11, setChecked11] = React.useState(false);
const [checked12, setChecked12] = React.useState(false);
const [checked13, setChecked13] = React.useState(false);
const [checked14, setChecked14] = React.useState(false);
const [checked15, setChecked15] = React.useState(false);
const [checked16, setChecked16] = React.useState(false);
const [checked17, setChecked17] = React.useState(false);
const [checked18, setChecked18] = React.useState(false);
const [checked19, setChecked19] = React.useState(false);
const [checked20, setChecked20] = React.useState(false);
const [checked21, setChecked21] = React.useState(false);
const [checked22, setChecked22] = React.useState(false);
const [checked23, setChecked23] = React.useState(false);
const [checked24, setChecked24] = React.useState(false);
const [checked25, setChecked25] = React.useState(false);
const [checked26, setChecked26] = React.useState(false);
const [checked27, setChecked27] = React.useState(false);
const [checked28, setChecked28] = React.useState(false);
const [checked29, setChecked29] = React.useState(false);
const [checked30, setChecked30] = React.useState(false);
const [checked31, setChecked31] = React.useState(false);
const [checked32, setChecked32] = React.useState(false);
const [checked33, setChecked33] = React.useState(false);
const [checked34, setChecked34] = React.useState(false);
const [checked35, setChecked35] = React.useState(false);
const [checked36, setChecked36] = React.useState(false);
const [checked37, setChecked37] = React.useState(false);
const [checked38, setChecked38] = React.useState(false);
const [checked39, setChecked39] = React.useState(false);
const [checked40, setChecked40] = React.useState(false);
const [checked41, setChecked41] = React.useState(false);
const [checked42, setChecked42] = React.useState(false);
const [checked43, setChecked43] = React.useState(false);
const [checked44, setChecked44] = React.useState(false);
const [checked45, setChecked45] = React.useState(false);
// Declare 11 constants for the 11 checkboxes
const [checked46, setChecked46] = React.useState(false);
const [checked47, setChecked47] = React.useState(false);
const [checked48, setChecked48] = React.useState(false);
const [checked49, setChecked49] = React.useState(false);
const [checked50, setChecked50] = React.useState(false);
const [checked51, setChecked51] = React.useState(false);
const [checked52, setChecked52] = React.useState(false);
const [checked53, setChecked53] = React.useState(false);
const [checked54, setChecked54] = React.useState(false);
const [checked55, setChecked55] = React.useState(false);
const [checked56, setChecked56] = React.useState(false);


const [count, setCount] = React.useState(0);


const handleChange8 = (event) => {
    if (count < 10) {
        setChecked8(event.target.checked);
        console.log(event.target.checked)
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
        console.log(count)
    }
    else {
        if (event.target.checked) {
            setChecked8(false);
            setCount(count - 1);
        }
        console.log(count)

       
    }
    

};

const handleChange9 = (event) => {
    if (count <= 10) {
        setChecked9(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked9(false);
            setCount(count - 1);

        }
    }
};

const handleChange10 = (event) => {
    if (count <= 10) {
        setChecked10(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked10(false);
            setCount(count - 1);

        }
    
    }
};

const handleChange11 = (event) => {
        if (count <= 10) {
        setChecked11(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked11(false);
            setCount(count - 1);

        }

    }
};

const handleChange12 = (event) => {
        if (count <= 10) {
        setChecked12(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked12(false);
            setCount(count - 1);

        }
     
    }
};

const handleChange13 = (event) => {
        if (count <= 10) {
        setChecked13(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked13(false);
            setCount(count - 1);

        }
  
    }
};

const handleChange14 = (event) => {
        if (count <= 10) {
        setChecked14(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked14(false);
            setCount(count - 1);

        }
     
    }
};

const handleChange15 = (event) => {
        if (count <= 10) {
        setChecked15(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked15(false);
            setCount(count - 1);

        }
   
    }
};

const handleChange16 = (event) => {
        if (count <= 10) {
        setChecked16(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked16(false);
            setCount(count - 1);

        }
     
    }
};

const handleChange17 = (event) => {
        if (count <= 10) {
        setChecked17(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked17(false);
            setCount(count - 1);

        }
    
    }
};

const handleChange18 = (event) => {
       if (count <= 10) {
        setChecked18(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked18(false);
            setCount(count - 1);

        }
      
    }
};

const handleChange19 = (event) => {
        if (count <= 10) {
        setChecked19(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked19(false);
            setCount(count - 1);

        }
    
    }
};

const handleChange20 = (event) => {
        if (count <= 10) {
        setChecked20(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    else {
        if (event.target.checked) {
            setChecked20(false);
            setCount(count - 1);

        }
  
    }
};

const handleChange21 = (event) => {
    setChecked21(event.target.checked);
};

const handleChange22 = (event) => {
    setChecked22(event.target.checked);
};

const handleChange23 = (event) => {
    setChecked23(event.target.checked);
};

const handleChange24 = (event) => {
    setChecked24(event.target.checked);
};

const handleChange25 = (event) => {
    setChecked25(event.target.checked);
};

const handleChange26 = (event) => {
    setChecked26(event.target.checked);
};

const handleChange27 = (event) => {
    setChecked27(event.target.checked);
};

const handleChange28 = (event) => {
    setChecked28(event.target.checked);
};

const handleChange29 = (event) => {
    setChecked29(event.target.checked);
};

const handleChange30 = (event) => {
    setChecked30(event.target.checked);
};

const handleChange31 = (event) => {
    setChecked31(event.target.checked);
};

const handleChange32 = (event) => {
    setChecked32(event.target.checked);
};

const handleChange33 = (event) => {
    setChecked33(event.target.checked);
};

const handleChange34 = (event) => {
    setChecked34(event.target.checked);
};

const handleChange35 = (event) => {
    setChecked35(event.target.checked);
};

const handleChange36 = (event) => {
    setChecked36(event.target.checked);
};

const handleChange37 = (event) => {
    setChecked37(event.target.checked);
};

const handleChange38 = (event) => {
    setChecked38(event.target.checked);
};

const handleChange39 = (event) => {
    setChecked39(event.target.checked);
};

const handleChange40 = (event) => {
    setChecked40(event.target.checked);
};

const handleChange41 = (event) => {
    setChecked41(event.target.checked);
};

const handleChange42 = (event) => {
    setChecked42(event.target.checked);
};

const handleChange43 = (event) => {
    setChecked43(event.target.checked);
    setChecked44(false);
    setChecked45(false);
};

const handleChange44 = (event) => {
    setChecked44(event.target.checked);
    setChecked43(false);
    setChecked45(false);
};

const handleChange45 = (event) => {
    setChecked45(event.target.checked);
    setChecked43(false);
    setChecked44(false);
};

const handleChange46 = (event) => {
    setChecked46(event.target.checked);
    setChecked47(false);
    setChecked48(false);
    setChecked49(false);
    setChecked50(false);
    setChecked51(false);
    setChecked52(false);
};

const handleChange47 = (event) => {
    setChecked47(event.target.checked);
    setChecked46(false);
    setChecked48(false);
    setChecked49(false);
    setChecked50(false);
    setChecked51(false);
    setChecked52(false);
};

const handleChange48 = (event) => {
    setChecked48(event.target.checked);
    setChecked46(false);
    setChecked47(false);
    setChecked49(false);
    setChecked50(false);
    setChecked51(false);
    setChecked52(false);
};

const handleChange49 = (event) => { 
    setChecked49(event.target.checked);
    setChecked46(false);
    setChecked47(false);
    setChecked48(false);
    setChecked50(false);
    setChecked51(false);
    setChecked52(false);
};

const handleChange50 = (event) => {
    setChecked50(event.target.checked);
    setChecked46(false);
    setChecked47(false);
    setChecked48(false);
    setChecked49(false);
    setChecked51(false);
    setChecked52(false);
};

const handleChange51 = (event) => {
    setChecked51(event.target.checked);
    setChecked46(false);
    setChecked47(false);
    setChecked48(false);
    setChecked49(false);
    setChecked50(false);
    setChecked52(false);
};

const handleChange52 = (event) => {
    setChecked52(event.target.checked);

};

const handleChange53 = (event) => {
    setChecked53(event.target.checked);

};

const handleChange54 = (event) => {
    setChecked54(event.target.checked);

};

const handleChange55 = (event) => {
    setChecked55(event.target.checked);

};

const handleChange56 = (event) => {
    setChecked56(event.target.checked);

};


// Counter that allows up to 10 choices to be selected
// Between 8 and 42








return (

    <FormGroup>
   
    <br></br>
    <Typography variant="h6">What are you looking for in a coach? (Select up to 10 that apply)</Typography>
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked8}
                        onChange={handleChange8}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Effective Communicator"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked9}
                        onChange={handleChange9}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Listens Actively"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked10}
                        onChange={handleChange10}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Evokes Awareness"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked11}
                        onChange={handleChange11}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me Grow"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked12}
                        onChange={handleChange12}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Ethical"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked13}
                        onChange={handleChange13}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Confidential"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked14}
                        onChange={handleChange14}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Holds me Accountable"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked15}
                        onChange={handleChange15}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Has a sense of Humor"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked16}
                        onChange={handleChange16}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Leadership Experience"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked17}
                        onChange={handleChange17}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Military Experience"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked18}
                        onChange={handleChange18}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="C-Suite Experience"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked19}
                        onChange={handleChange19}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Challenges Me"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked20}
                        onChange={handleChange20}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Trustworthy"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked21}
                        onChange={handleChange21}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Understands my Environment"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked22}
                        onChange={handleChange22}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Gives me Constructive Feedback"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked23}
                        onChange={handleChange23}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me Explore Possibilities"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked24}
                        onChange={handleChange24}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me Find Possibilities"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked25}
                        onChange={handleChange25}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Works with me to Improve my Performance"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked26}
                        onChange={handleChange26}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me see my blindspots"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked27}
                        onChange={handleChange27}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me with Conflict Resolutions"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked28}
                        onChange={handleChange28}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Provides me with a way forward to engage employees/staff"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked29}
                        onChange={handleChange29}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Optimization of my performance"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked30}
                        onChange={handleChange30}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Optimization of my engagement"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked31}
                        onChange={handleChange31}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Facilitates my Learning"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked32}
                        onChange={handleChange32}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Explores ways to maximize my talents/skills"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked33}
                        onChange={handleChange33}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Improve diversity"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked34}
                        onChange={handleChange34}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me assessment and improve my behaviors"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked35}
                        onChange={handleChange35}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Helps me with Strategic Thinking"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked36}
                        onChange={handleChange36}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Improve my Critical Thinking Skills"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked37}
                        onChange={handleChange37}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Transition"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked38}
                        onChange={handleChange38}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Hone my intuition"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked39}
                        onChange={handleChange39}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Improve my Emotional Intelligence"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked40}
                        onChange={handleChange40}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Creative Mindset"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked41}
                        onChange={handleChange41}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Work Life Balance"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked42}
                        onChange={handleChange42}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Overcome personal biases"
            />
            <TextField id="outlined-basic" label="Other (Please State)" variant="outlined" />
            
        

        </FormControl>
        <br></br>
        <Typography variant="h6">Do you have a gender preference?</Typography>
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked43}
                        onChange={handleChange43}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Female"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked44}
                        onChange={handleChange44}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Male"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked45}
                        onChange={handleChange45}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="No Preference"
            />   

        </FormControl>

        <br></br>

        <Typography variant="h6">Do you have an ethnicity preference?</Typography>
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked46}
                        onChange={handleChange46}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="American Indian"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked47}
                        onChange={handleChange47}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Asian"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked48}
                        onChange={handleChange48}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Black"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked49}
                        onChange={handleChange49}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="People of Color"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked50}
                        onChange={handleChange50}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="White"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked51}
                        onChange={handleChange51}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="No Preference"
            />
        </FormControl>

        <br></br>   

        <Typography variant="h6">What areas/topics would you like to address in your coaching sessions?  (Select all that apply)</Typography>
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked52}
                        onChange={handleChange52}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Executive Presence"
            />  
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked53}
                        onChange={handleChange53}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Managing UP"
            />  
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked54}
                        onChange={handleChange54}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Managing Across"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked55}
                        onChange={handleChange55}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Emotional Intelligence"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked56}
                        onChange={handleChange56}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Communication"
            />
            <FormControlLabel
                control={
                    <TextField id="outlined-basic" label="Other (Please State)" variant="outlined" />
                }
            /> 
        </FormControl>
                
        <br></br>

    </FormGroup>
);

}

