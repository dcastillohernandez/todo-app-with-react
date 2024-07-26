import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setUseCounter] = useState(initialValue);

    const increment = () => {
        setUseCounter(counter + 1);
    }

    const decrement = () => {
        setUseCounter(counter - 1);
    }

    const reset = () => {
        setUseCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
