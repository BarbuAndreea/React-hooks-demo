import React, { useState } from 'react'

function UseStateArray() {
    const [elements, setElements] = useState([])

    const addElement = () => {
        setElements([ ...elements, {
            id: elements.length, 
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addElement}>Add a number</button>
                {elements.map(el => (<div key={el.id}>{el.value}</div>))}
        </div>
    )
}

export default UseStateArray