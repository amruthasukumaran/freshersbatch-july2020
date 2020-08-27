import React, {useState, useEffect} from 'react'

function FunctionTick(){

    const [count, setCount] = useState(0)


    const tick = () =>{
        setCount(count + 1)
    }

    useEffect(() =>{
        const interval = setInterval(tick, 1000)

        return()=>{
            clearInterval(interval)
        }
    }, [count])//if u add prevCount in setCount u can skip count in array n leave it empty
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}
export default FunctionTick