import ClassComponent from "./ClassComponent"
import Button from "./Button";

const Text = () => {
    
    const question = 'React is fun?';

    const status = true;

    const handleClickSimple = () => {
        console.log("clicked");
    }

    const handleClick = (name) => {
        console.log(`${name} has been clicked`);
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
        {/* Iterate an array of objects and pass data as props to component */}
        {students.map((something => (
            <Button 
                key={something.id}
                student={something}
                studentName={something.name}
                handleClick={handleClick}
            />
        )))}
        {/* Placing dynamic content */}
        <div>{question}</div>
        {/* Ternary */}
        {status ? <div>Yes!</div> : <div>No</div>}
        <ClassComponent />
        <button onClick={handleClickSimple}>Click me!</button>
    </div>
    
  )
}

export default Text