import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormPageC = ({ formData, updateFormData}) => {
  const sliderStyle = {
    display: 'flex',
    width: 0.3,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const boxStyle = { 
    width: 0.8, display: 'block', margin: 'auto',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center', }
  return (
    <div>
        <div>
            <h1>Are you happy?</h1>
            <h3>Keep it simple - listen to you heart.</h3>
        </div>
        <Box sx={boxStyle}>
          <Typography gutterBottom>Happiness check</Typography>
          <Box sx={sliderStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Happy?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData["happiness"]}
              label="Happy?"
              onChange={(e) => updateFormData("happiness", e.target.value)}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
              <MenuItem value={"I don't know"}>I don't know</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </Box>
    </div>
  )
}

export default FormPageC;