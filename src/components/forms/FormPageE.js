import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from '@mui/material';

const FormPageE = ({ formData, updateFormData}) => {
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
          <Typography sx={headerStyle} variant='h3' fontFamily={'Montserrat'} >What do you love?</Typography>
          <Typography sx={headerStyle} variant='h4' fontFamily={'Montserrat'} >Tell us what you love to do.</Typography>
        </div>
        <Typography gutterBottom variant='h6' fontFamily={'Montserrat'} >Add up to 5.</Typography>
        
        <input type='text' placeholder={"I love to..."} value={formData["loves"]} onChange={(e) => updateFormData("loves", e.target.value)}></input>
      </motion.div>
        
    </div>
  )
}

export default FormPageE;