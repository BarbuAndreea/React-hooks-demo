import React, {useState, useEffect, useRef} from 'react'

function UseRefExample() {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef()

  useEffect(() => {
    interValRef.current = setInterval(() => { // interValRef.current = setInterval
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
    clearInterval(interValRef.current)
    //clearInterval(interval)
    }
  }, [])
  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button> 
      {/* clearInterval(interval) */}
    </div>
  )
}

export default UseRefExample