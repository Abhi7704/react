import react , {Component} from 'react'

class Addition extends Component{
    constructor(props){
        super(props)
        this.state = {
            num : 0
        }
    }

    Increment = ()=>{
        this.setState({num : this.state.num+1})
    }

    render(){
        return(
            <div>
                <h1>Class component</h1>
                <p>{this.state.num}</p>
                <button onClick={this.Increment}>Click me</button>
            </div>
        )
    }
}

export default Addition;