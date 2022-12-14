import React from "react";

function Button({student, studentName, handleClick}){
    const handleClickChild = () => {
        console.log('child function clicked');
        handleClick(studentName);
    }
    return  <button onClick={handleClickChild}>{studentName}</button>
}

export default Button;
