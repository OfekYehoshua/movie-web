import { useState } from "react"



function Counter() {
    const [count, setCount]= useState(0)
    return(
    <div>
        <button className="minus" onClick={()=>setCount(-1)}>👎</button>
        <span>{count}</span>
        <button className="plus" onClick={()=>setCount(+1)}>👍</button>
    </div>
    )
}
export default Counter