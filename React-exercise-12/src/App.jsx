import { useState } from "react"

function App (){
  const [number, setNumber] = useState(0)
  const increment = ()=>{
    setNumber(number + 1)
  }
  const decrement = ()=>{
    if(!number <=0 ){
      setNumber(number - 1)
    }
  }
  return(
    <div>
      <h1>Count: {number}</h1>
      <button disabled ={number === 0} onClick={decrement} value={number}>Decrement</button>
      <button onClick={increment} value={number}>Increment</button>
    </div>
  )
}

export default App