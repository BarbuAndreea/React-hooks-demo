import { useState, useEffect } from "react";

function UseEffectExample() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // useEffect(() => {
    //     console.log("counter");
    // }, [counter2])

    useEffect(() => {
        setCounter(counter+1);
        console.log(counter);
    }, [])

    // useEffect(() => {
    //     console.log("The number of clicks: ", counter);
    // }, [counter])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)} > Increase </button>
            <button onClick={() => {setCounter2(counter2 + 1); console.log("hello")}} > Hello </button>
        </div>
    );
}

export default UseEffectExample;