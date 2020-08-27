import React, {useState, useEffect} from 'react'
import FunctionHookOnce from './FunctionHookOnce';

function CleanUpHook(){

    const[display, setDisplay] = useState(true)


    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <FunctionHookOnce/>}
        </div>
    )
}
export default CleanUpHook