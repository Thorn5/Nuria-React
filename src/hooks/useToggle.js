
import React, {useState} from 'react'

const useToggle = (initialState = false) => {

    const [value, setValue] = useState(initialState);

    function toggle() {
        setValue(!value)
    }
    
  return {value, toggle};
}

export default useToggle