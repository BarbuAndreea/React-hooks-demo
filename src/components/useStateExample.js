import { useState } from 'react'

function UseStateExample() {
    // let count = 0;

    // const increaseCounter = () => {
    //     count = count + 1;
    //     console.log(count);
    // }

    //integer
    const [count, setCount] = useState(0);

    const increaseCounter = () => {
        setCount(count + 1);
    }

    console.log("changed");
    //boolean
    // const [showText, setShowText] = useState(true);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCounter} > Increase </button>
            <button onClick={() => setCount(0)} > Reset </button>
            {/* <button
                onClick={() =>  {
                    setShowText(!showText);
                    console.log(showText)
                }}
            >Show/Hide
            </button>
            {showText && <h1>Salut!</h1>}  */}
        </div>
    )
}

export default UseStateExample