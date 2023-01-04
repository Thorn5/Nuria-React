import React from 'react'

const Input = ({value, handleChange}) => {

    const handleChangeChild = (event) => {
        handleChange(event.target.value);
    }

  return (
    <input value={value} placeholder="Enter a text" onChange={handleChangeChild} />
  )
}

export default Input