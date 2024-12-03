import react,{useState} from 'react'


const DecrementFunc = () => {

  const[count,setCount] = useState(20);


  let Decrement = () =>{
    setCount(count - 1)
  }


  return (
    <div>
        <h1>Functional component</h1>
        <p>{count}</p>
        <button onClick={Decrement} >click me</button>
      
    </div>
  )
}

export default DecrementFunc
