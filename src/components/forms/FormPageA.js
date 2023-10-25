import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormPageA = ({ formData, updateFormData}) => {
  const inputStyle = {
    display: 'flex',
    width: 0.3,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const boxStyle = { 
    width: 0.3, display: 'block', margin: 'auto',
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center', }
   
  return (
    <div>
        <div>
          <h1>Personal Information</h1>
          <h2>Lets get to know you!</h2>
        </div>
        <Box sx={boxStyle}>
          <Typography gutterBottom>First Name</Typography>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="First name"
            value={formData["first_name"]}
            onChange={(e) => updateFormData("first_name", e.target.value)}
            defaultValue="First name"
          />
        </Box>
        <Box sx={boxStyle}>
          <Typography gutterBottom>Last Name</Typography>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Last name"
            value={formData["last_name"]}
            onChange={(e) => updateFormData("last_name", e.target.value)}
            defaultValue="Last name"
          />
        </Box>
        <Box sx={boxStyle}>
          <Typography gutterBottom>Email</Typography>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Email"
            value={formData["email"]}
            onChange={(e) => updateFormData("email", e.target.value)}
            defaultValue="Email"
          />
        </Box>
    </div>
  )
}

export default FormPageA;