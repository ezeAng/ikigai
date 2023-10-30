import React, {useState} from 'react'
import { motion } from "framer-motion";
import { Typography } from '@mui/material';
import TagsInput from 'react-tagsinput';


const FormPageE = ({ formData, updateFormData}) => {
  const headerStyle = {
    margin: "auto",
    marginTop: 1,
    width: 0.5,
    height: 100
  }
  const [tags, setTags] = useState(formData['skills']);

  const handleChange = (tags) => {
    updateFormData("loves", tags)
    setTags(tags);
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
        </div>
        <Typography gutterBottom variant='h6' fontFamily={'Montserrat'} >Tell us what you love to do! Add up to 5.</Typography>
        <TagsInput maxTags={5} className='react-tagsinput' value={formData['loves']} onChange={handleChange} />
        
      </motion.div>
        
    </div>
  )
}

export default FormPageE;