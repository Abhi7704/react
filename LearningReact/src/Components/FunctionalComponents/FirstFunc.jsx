import React, { useState } from 'react'

const FirstFunc = () => {
    const [count , setCount] = useState(0)

    let Increment = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>Functional Component</h1>
      <p>{count}</p>
      <button onClick={Increment}>Click me</button>
    </div>
  )
}

export default FirstFunc
