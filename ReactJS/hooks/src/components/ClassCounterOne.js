import React, {Component} from 'react'

class ClassCounterOne extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            name : ''
        }
    }

    componentDidMount(){
        document.title=`You clicked  ${this.state.count} times`
    }

    componentDidUpdate(prevProps, PrevState){
        if(PrevState.count!== this.state.count){
            console.log("hey")
            document.title=`You clicked  ${this.state.count} times`
             }
       }


    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value}) }/>
                <button onClick={() => this.setState({count:this.state.count + 1})}>Clicked {this.state.count} timews</button>
            </div>
        )
    }
}


export default ClassCounterOne