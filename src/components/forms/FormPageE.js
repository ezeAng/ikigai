import React from 'react'

const FormPageE = ({ formData, updateFormData}) => {
   
  return (
    <div>
        <div>
            <h1>What do you love?</h1>
            <h2>Tell us what you love to do.</h2>
            <h3>Add up to 5.</h3>
        </div>

        <div>Change to todo list style of adding</div>
        <input type='text' placeholder={"I love to..."} value={formData["loves"]} onChange={(e) => updateFormData("loves", e.target.value)}></input>
    </div>
  )
}

export default FormPageE;