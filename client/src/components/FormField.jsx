import React from 'react'

function FormField({labelName,type,name,placeholder,value,handlechange,isSurpriseMe,
    handleSurprizeMe}) {
  return (
    <div>
        <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name}
        className='block text-sm front-medium text-gray-900'>
        {labelName}
        </label>
        {isSurpriseMe &&(
            <button className='font-semibold text-xs bg-[#ECECF1] py-1
            px-2 rounded-md text-black'>Surprise Me</button>
        )}
         </div>
         <input 
         type={type}
         id={name}
         name={name}
         placeholder={placeholder}
         onChange={handlechange}
         required
        className='bg-gray-50 border-grey-900 text-grey-900 focus:ring-[#4649ff]
        focus:border-[#4649ff]
        text-sm rounded-lg border outline-none block w-full p-3'/>
    </div>
  )
}

export default FormField