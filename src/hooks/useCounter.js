import { useState } from "react"

export const useCounter = (initialValue) => {
    
    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = () =>{
        setCounter(counter + 1)
    }

    const handleDecrement = () =>{
        setCounter(counter - 1)
    }

    const handleReset = () =>{
        setCounter(initialValue)
    }

    return{
        counter: counter,
        handleIncrement: handleIncrement,
        handleDecrement: handleDecrement,
        handleReset: handleReset
    }
}
