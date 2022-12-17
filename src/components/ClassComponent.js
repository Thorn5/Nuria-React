import React, { Component } from 'react';
import Button from './Button/Button';

export default class ClassComponent extends Component {

    
  render() {

    const students = [
        {
            id: 1,
            name: 'Trygve'
        },

        {
            id: 2,
            name: 'Mirko'
        },
        {
            id: 3,
            name: 'Joan'
        },
        {
            id: 4,
            name: 'Emma'
        }
    ]

    const handleClick = (name) => {
        console.log(name, "clicked");
    }

    return (
      <div>
        <h1>hello classcomponent</h1>
        {students.map((something => (
            <Button 
                key={something.id}
                student={something}
                studentName={something.name}
                handleClick={handleClick}
            />
        )))}
        </div>
    )
  }
}
