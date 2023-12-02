import React, { useReducer } from 'react'

export default function UseReduced() {
    const reducer = (state,action)=>{
        // if (action=="ASC") {
        //     return state+1
        // }
        switch (action.action) {
            case "ASC":
                return state+1
            case "DESC":
                return state-1
        
            default:
                return state;
        }
    }
    const [abc, ditpach] = useReducer(reducer,0)
    const handleCount=()=>{
        ditpach({
            payload:"10",
            action:"ASC"
        })
    }

  return (
    <>
    <p>count: {abc}</p>
    <button onClick={handleCount}>Tăng count</button>
    <button onClick={()=>ditpach({
        payload:"20",
        action:"DESC"
    })}> giảm count</button>
    </>
  )
}
