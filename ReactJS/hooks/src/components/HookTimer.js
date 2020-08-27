import React, {useState, useEffect, useRef} from 'react'
import PrevState from './prevState'


function HookTime(){

    const [timer, setTimer] = useState(0)
    const interval = useRef()

    useEffect(() => {
         interval.current = setInterval(() => {
            setTimer(PrevState => PrevState + 1)
            }, 1000)
    

        return() => {
            clearInterval(interval.current)
        }
    },[])

    return(
        <div>
            Timer - {timer}
            <button onClick={() => clearInterval(interval.current)}>Stop Timer</button>
        </div>
    )
}
export default HookTime