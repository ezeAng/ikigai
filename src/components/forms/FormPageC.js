import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from "framer-motion";

const FormPageC = ({ formData, updateFormData}) => {
  const sliderStyle = {
    display: 'flex',
    width: 0.3,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const boxStyle = {
    display: 'block', 
    margin: 'auto',
    marginTop: 3,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center', }

  const headerStyle = {
    margin: "auto",
    marginTop: 3,
    marginBottom: 0,
    width: 1,
    height: 1
  }
  return (
    <div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div>
          <Typography sx={headerStyle} variant='h3' fontFamily={'Montserrat'} >Are you happy?</Typography>
        </div>
        <Box sx={boxStyle}>
          <Typography variant='h6' fontFamily={'Montserrat'} gutterBottom>Keep it simple - listen to your heart.</Typography>
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
        </motion.div>
        
        
    </div>
  )
}

export default FormPageC;