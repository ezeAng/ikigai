import React, {useState} from 'react'
import { motion } from "framer-motion";
import { Typography } from '@mui/material';
import TagsInput from 'react-tagsinput';
import '../../styles/global.css';

const FormPageD = ({ formData, updateFormData}) => {
  const headerStyle = {
    margin: "auto",
    marginTop: 1,
    width: 0.5,
    height: 100
  }

  const [tags, setTags] = useState(formData['skills']);

  const handleChange = (tags) => {
    updateFormData("skills", tags)
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
            <Typography sx={headerStyle} variant='h3' fontFamily={'Montserrat'} >What are you good at?</Typography>
          </div>
          <Typography gutterBottom variant='h6' fontFamily={'Montserrat'} >What skills do you have? Type them in below</Typography>
          <TagsInput maxTags={15} className='react-tagsinput' value={formData['skills']} onChange={handleChange} />
        </motion.div>
        
    </div>
  )
}

export default FormPageD;