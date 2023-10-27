import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";

const FormPageA = ({ formData, updateFormData}) => {

  const boxStyle = { 
    width: 0.3, display: 'block', margin: 'auto',
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }

  const headerStyle = {
    padding: 2,
    margin: "auto",
    width: 0.5,
    height: "fit-content"
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
            <Typography sx={headerStyle} gutterBottom variant='h4' fontFamily={'Montserrat'} >Personal Information</Typography>
            <Typography sx={headerStyle} gutterBottom variant='h5' fontFamily={'Montserrat'} >Lets get to know you!</Typography>
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
            
          />
        </Box>

        </motion.div>
        
    </div>
  )
}

export default FormPageA;