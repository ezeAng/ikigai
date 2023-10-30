import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { motion } from "framer-motion";

const FormPageSubmit = ({ formData, updateFormData}) => {
  const innerBoxStyle = {
    display: 'flex',
    width: 0.3,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const boxStyle = { 
    width: 0.8, display: 'block', margin: 'auto',
    marginTop: 10,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  }

  return (
    <div>
      <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
      >
        <Typography variant='h2' sx={{marginTop:4, padding: 4}} fontFamily={'Montserrat'} >Ready to discover yourself?</Typography>

        <Box sx={boxStyle}>
          <Typography variant='h5' fontFamily={'Montserrat'} gutterBottom>I want to seek...</Typography>
          <Box sx={innerBoxStyle}>
            <FormControl fullWidth>
              <InputLabel fontFamily={'Montserrat'} id="demo-simple-select-label">Output</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Happy?"
                value={formData["help_wanted"]} 
                onChange={(e) => updateFormData("help_wanted", e.target.value)}
              >
                <MenuItem value={0}><Typography fontFamily={'Montserrat'}>Career path suggestions</Typography></MenuItem>
                <MenuItem value={1}><Typography fontFamily={'Montserrat'}>Small and actionable steps for daily life</Typography></MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </motion.div>
        
    </div>
  )
}

export default FormPageSubmit