import React from 'react'

function SwitchButton({state, handleClick}) {
  return (
    <button onClick={handleClick}>{state ? "On" : "Off"}</button>
  )
}

export default SwitchButton