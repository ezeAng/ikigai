import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormPageB = ({ formData, updateFormData}) => {
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
          <h1>Personal Information</h1>
          <h2>A little more...</h2>
        </div>
        <Box sx={boxStyle}>
          <Typography gutterBottom>Age</Typography>
          <Slider
            sx={sliderStyle}
            defaultValue={21}
            aria-label="Default"
            value={formData['age']}
            valueLabelDisplay="auto"
            onChange={(e) => updateFormData("age", e.target.value)} />
        </Box>
        <Box sx={boxStyle}>
          <Typography gutterBottom>Gender</Typography>
          <Box sx={sliderStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData["gender"]}
              label="Gender"
              onChange={(e) => updateFormData("gender", e.target.value)}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          </Box>
          
        </Box>
        <Box sx={boxStyle}>
          <Typography gutterBottom>Employment Status</Typography>
          <Box sx={sliderStyle}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Employment</InputLabel>
            <Select
              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData["employment_status"]}
              label="Employment"
              onChange={(e) => updateFormData("employment_status", e.target.value)}
            >
              <MenuItem value={"Employed"}>Employed</MenuItem>
              <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
              <MenuItem value={"Self-employed"}>Self-employed</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          </Box>
          
        </Box>
        
        {/* <input type='text' placeholder={"Nationality"} value={formData["nationality"]} onChange={(e) => updateFormData("nationality", e.target.value)}></input>
        <input type='text' placeholder={"Where do you stay?"} value={formData["place_of_residence"]} onChange={(e) => updateFormData("place_of_residence", e.target.value)}></input> */}
        
    </div>
  )
}

export default FormPageB;