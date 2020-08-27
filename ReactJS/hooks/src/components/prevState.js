import React, {useState} from 'react'

function PrevState(){

    const initialcount = 0
    const [count,setCount] = useState(initialcount)

    return(
        <div>
            count : {count}
            <button onClick={() => setCount(prevState => prevState+ 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={() => setCount(initialcount)}>Reset</button>
        </div>
    )
}
export default PrevState