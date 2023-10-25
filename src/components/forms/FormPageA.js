import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion, AnimatePresence } from "framer-motion";

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

  const headerStyle = {
    margin: "auto",
    marginTop: 2,
    marginBottom: 1,
    width: 0.5,
    height: 100
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
            <Typography sx={headerStyle} variant='h3' fontFamily={'Montserrat'} >Personal Information</Typography>
            <Typography sx={headerStyle} variant='h4' fontFamily={'Montserrat'} >Lets get to know you!</Typography>
          </div>
        <Box sx={boxStyle}>
          <Typography fontFamily={'Montserrat'} gutterBottom>First Name</Typography>
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
          <Typography fontFamily={'Montserrat'} gutterBottom>Last Name</Typography>
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
          <Typography fontFamily={'Montserrat'} gutterBottom>Email</Typography>
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

        </motion.div>
        
    </div>
  )
}

export default FormPageA;