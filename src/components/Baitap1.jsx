import React, { useState } from 'react'

export default function Baitap1() {
    const [count, setCount] = useState(0)
   const increaseCount=()=>{
        setCount(count+1);
    }
  return (
    <>
        <p>Số lần click: {count} </p>
        <button onClick={increaseCount}>Click</button>

    </>
  )
}
