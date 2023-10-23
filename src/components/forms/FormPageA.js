import React from 'react'

const FormPageA = ({ formData, updateFormData}) => {
   
  return (
    <div>
        <div><h1>Personal Information</h1></div>
        <input type='text' placeholder={"First name"} value={formData["first_name"]} onChange={(e) => updateFormData("first_name", e.target.value)}></input> 
        <input type='text' placeholder={"Last name"} value={formData["last_name"]} onChange={(e) => updateFormData("last_name", e.target.value)}></input> 
        <input type='email' placeholder={"Email"} value={formData["email"]} onChange={(e) => updateFormData("email", e.target.value)}></input> 
    </div>
  )
}

export default FormPageA;