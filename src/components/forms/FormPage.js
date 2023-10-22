import React from 'react'

const FormPage = ({formConfig, formData, updateFormData}) => {
   
  return (
    <div>
        <div>{formConfig.name}</div>
        {formConfig.field_names.length ? <input type='text' placeholder={formConfig.field_names[0]} value={formData[formConfig.field_names[0]]} onChange={(e) => updateFormData(formConfig.field_names[0], e.target.value)}></input> : null}
        {formConfig.field_names.length ? <input type='text' placeholder={formConfig.field_names[1]} value={formData[formConfig.field_names[1]]} onChange={(e) => updateFormData(formConfig.field_names[1], e.target.value)}></input> : null }
        
    </div>
  )
}

export default FormPage