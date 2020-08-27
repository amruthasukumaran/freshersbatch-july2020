import React, {Component} from 'react'

class ClassEffectOnce extends Component{

    constructor(props){
        super(props)
        this.state = {
            x : 0,
            y : 0
        }
    }

    Mouse = e =>{
        this.setState({x : e.clientX , y : e.clientY})
    } 

    componentDidMount(){
        window.addEventListener('mousemove', this.Mouse)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.Mouse)
    }
    
    render(){
        return(
            <div>
               X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}
export default ClassEffectOnce