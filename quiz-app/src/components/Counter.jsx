import React, { useEffect, useState } from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    function handleIncrese(){
        setCount(count+1)
    }
    function handleDecrese(){
        setCount(count-1)
    }
    useEffect(()=>{
        // alert("hi",{count})
        setCount1(count*5)
    },[count])
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncrese}>Increse</button>
        <button onClick={handleDecrese}>Decrese</button>
        <h1>Counter-1:{count1}</h1>
    </div>
  )
}

export default Counter