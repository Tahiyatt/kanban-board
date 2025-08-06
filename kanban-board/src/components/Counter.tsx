import {useState} from 'react'

type CounterProps = {
    inital:number 
}
function Counter({inital}:CounterProps){
    const [count, setCount] = useState(inital);

    return (
        <div className="border-4">
            
        </div>
    )
}

export default Counter;