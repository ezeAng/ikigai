import React from 'react'

const FormPageSubmit = ({ formData, updateFormData}) => {
  return (
    <div>
        <h1>Ready to discover yourself?</h1>
        <h2>What would you want us to help you with?</h2>
        <input type='text' placeholder={"I want to seek..."} value={formData["help_wanted"]} onChange={(e) => updateFormData("help_wanted", e.target.value)}></input>
    </div>
  )
}

export default FormPageSubmit