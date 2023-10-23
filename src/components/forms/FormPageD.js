import React from 'react'

const FormPageD = ({ formData, updateFormData}) => {
   
  return (
    <div>
        <div>
            <h1>What are you good at?</h1>
            <h2>What skills do you have?</h2>
        </div>

        <div>Change to some linkedin style skill adder</div>
        <input type='text' placeholder={"Skills..."} value={formData["skills"]} onChange={(e) => updateFormData("skills", e.target.value)}></input>
    </div>
  )
}

export default FormPageD;