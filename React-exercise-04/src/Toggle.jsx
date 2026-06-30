import { useState } from "react"

const Toggle = ()=>{

    const [turnOn, setTurnOn] = useState(true)

    const handleChange = ()=>{
        setTurnOn(!turnOn)
    }
    return(
        <>
            <p>The Button is Turned {turnOn ? "ON": "OFF"}</p>
            <button onClick={handleChange}>Turn {turnOn ? "OFF" : "ON"}</button>
        </>
    )
}

export default Toggle