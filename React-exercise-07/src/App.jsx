import { useEffect, useState } from "react"

function App(){

  const [coords,setCoords] = useState({x:0, y:0})

  useEffect(()=>{
    const handleMove = (e)=>{
      setCoords({x: e.clientX, y: e.clientY})
    }
    window.addEventListener("mousemove", handleMove)

    return()=>{
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return(
    <div>
      <p>The X cursor is : {coords.x}</p>
      <p>The Y cursor is : {coords.y}</p>
    </div>
  )
}

export default App