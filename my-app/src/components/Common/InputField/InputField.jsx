import React from 'react'
const InputField = ({ 
    type,
    name,
    className,
    value,
    onChange,
    label,
    placeholder,
    required,
    min,
    max,
    onError}) =>  {
  return (
    <div>
        <input
         type={type}
         name={name}
         className={className}
         value={value}
         onChange={onChange}
         label={label}
         placeholder={placeholder}
         required={required}
         min = {min}
         max ={max} 
         onError = {onError}
       />
       
    </div>
  )
}
export default InputField

