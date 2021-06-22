import { useState } from "react"

export function Button() {

    const [count, setCount] = useState(0)

    function countIncrement() {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <button onClick={countIncrement}>{count}</button>
    )
}