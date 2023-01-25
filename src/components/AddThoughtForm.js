import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
console.log(props, 'props');
  

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello submit");
    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }; 

    props.addThought(newThought); 
   }     
  
  return (
    <form className="AddThoughtForm"  onSubmit={handleSubmit} >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
    <button type="submit" value="Add">Add</button>
    </form>
  );
}