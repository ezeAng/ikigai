import React from 'react'

const FormPageC = ({ formData, updateFormData}) => {
   
  return (
    <div>
        <div>
            <h1>Are you happy?</h1>
            <h2>Would you say you are happy with where you are in life? 
            Don't overthink it, a simple Yes or No and listen to you heart.</h2>
        </div>
        <input type='text' placeholder={"Happy?"} value={formData["happiness"]} onChange={(e) => updateFormData("happiness", e.target.value)}></input> 
        
    </div>
  )
}

export default FormPageC;