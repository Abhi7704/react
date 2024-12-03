import react ,{Component} from 'react'
class Decrement extends Component{
    constructor(props){
        super(props) 
        this.state={
            num : 10
        }
    }

    subtraction=()=>{
        this.setState({num:this.state.num -1})
    }

    render(){
        return(
        <div>
            <h1>class component</h1>
            <p>{this.state.num}</p>
            <button onClick={this.subtraction}>clickme</button>
        </div>
        )
        



    }
}

export default Decrement