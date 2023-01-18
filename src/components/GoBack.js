import React from 'react';
import { useNavigate} from 'react-router-dom'

const GoBack = () => {
    const navigation = useNavigate();

  return (
    <button onClick={() => navigation(-1)}>GoBack</button>
  )
}

export default GoBack