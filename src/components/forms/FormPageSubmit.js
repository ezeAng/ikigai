import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormPageSubmit = ({ formData, updateFormData}) => {
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
        <h1>Ready to discover yourself?</h1>
        <h2>What would you want us to help you with?</h2>
        <Box sx={boxStyle}>
          <Typography gutterBottom>I want to seek...</Typography>
          <Box sx={sliderStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Output</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Happy?"
              value={formData["help_wanted"]} 
              onChange={(e) => updateFormData("help_wanted", e.target.value)}
              
            >
              <MenuItem value={0}>Career path suggestions</MenuItem>
              <MenuItem value={1}>Small and actionable steps for daily life</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </Box>
    </div>
  )
}

export default FormPageSubmit