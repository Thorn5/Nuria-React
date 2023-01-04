import ClassComponent from "./ClassComponent"
import Button from "./Button/Button";

const Text = () => {
    
    const question = 'React is fun?';

    const status = true;

    const handleClickSimple = () => {
        alert("clicked");
    }

    const handleClick = (name) => {
       alert(`${name} has been clicked`);
    }

    const students = [
        {
            id: 1,
            name: 'Ale'
        },

        {
            id: 2,
            name: 'Mia'
        },
        {
            id: 3,
            name: 'Erol'
        },
        {
            id: 4,
            name: 'Ed'
        }
    ]

    
  return (
    <div>
        <div>hello I am text component</div>

        <div>{question}</div>
        <button onClick={handleClickSimple}>Click me!</button>

        {/* Iterate an array of objects and render div or each one */}
        {students.map((student => (
            <div>{student.name}</div>
        )))}

        {/* Iterate an array of objects and pass data as props to component */}
        {students.map((student => (
            <Button 
                key={student.id}
                student={student}
                studentName={student.name}
                handleClick={handleClick}
            />
        )))}
        {/* Placing dynamic content */}
        <div>{question}</div>
        {/* Ternary */}
        {status ? <div>Yes!</div> : <div>No</div>}
        <ClassComponent />
        
    </div>
    
  )
}

export default Text