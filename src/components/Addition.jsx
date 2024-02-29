import { useState } from "react";

function Addition() {

    // Reactive Variables 
    const [firstName, setFirstName] = useState('Aaron');
    const [result, setResult] = useState(null);

    // Normal Variables 
    let x = 0;
    let y = 0;

    // Not a reactive variable in react 
    // let result = 0; 

    function updateX(e) {
        const target = e.target
        const value = target.value
        console.log(value)
        x = parseInt(value);

    }

    function updateY(e) {
        const target = e.target
        const value = target.value
        console.log(value)
        y = parseInt(value);
    }

    function _calResult() {
        setResult(x + y);

    }

    return (
        <div>
            <h1>My Addition</h1>
            <h3>My Name is {firstName} </h3>
            <input
                onChange={updateX}
            />
            <input
                onChange={updateY}
            />
            <button
                onClick={_calResult}
            >
                Submit
            </button>
            <pre>
                Result is {result}
            </pre>
        </div>
    )


}
export default Addition;