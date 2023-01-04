import React from 'react'

function Input({value, handleChange}) {

    const handleChangeChild = (event) => {
        handleChange(event.target.value);
    }
  return (
    <input value={value} onChange={handleChangeChild} />
  )
}

export default Input