import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// Info icon
import InfoIcon from '@mui/icons-material/Info';

// Set tooltip title based on the value of the prop
export default function BasicTooltip(props) {
    return (
        <Tooltip title={props.title} arrow placement='right'>
        <IconButton>
            <InfoIcon />
        </IconButton>
        </Tooltip>
    );
    }