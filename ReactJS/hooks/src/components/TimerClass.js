import React, {Component} from 'react'
import PrevState from './prevState'

class TimerClass extends Component{
    interval
    constructor(props){
        super(props)
        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
       this.interval = setInterval(() => {
           this.setState(PrevState => ({timer : PrevState.timer + 1}))

       },1000)  
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    render(){
        return(
            <div>
               Timer - {this.state.timer}
               <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}
export default TimerClass