import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button onClick={()=> setCount(prev=> prev+1)}>increment</button>
            <button onClick={()=> setCount(prev=> prev-1)}>decrement</button>
        </div>
    )
}
export default Counter
