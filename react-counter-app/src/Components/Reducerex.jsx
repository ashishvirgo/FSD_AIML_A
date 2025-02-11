import React from 'react'
import { useReducer } from 'react';
const Reducerex = () => {
    const initialValue={count:0};
    const [state,dispatch]=useReducer(reducer,initialValue);
    function reducer(state,action){
     switch(action.type){
        case "add":
            return {count:state.count+1};
        case "sub":
            return {count:state.count-1};
        case "reset":
            return {count:0};
        default:
            throw new Error("unexpected action");            
     }
    }
  return (
    <div>
      <h1>
        Counter:{state.count}
      </h1>
      <button onClick={()=>dispatch({type:"add"})}>Incerement</button>
      <button onClick={()=>dispatch({type:"sub"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Reducerex
