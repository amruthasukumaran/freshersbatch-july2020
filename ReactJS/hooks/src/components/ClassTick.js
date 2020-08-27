import React, {Component} from 'react'

class ClassTick extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    tick = ()=>{
        this.setState({count : this.state.count + 1})
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
       clearInterval(this.interval)    
    }

    render(){
        return(
            <div>
               <h2>{this.state.count}</h2>
            </div>
        )
    }

}
export default ClassTick