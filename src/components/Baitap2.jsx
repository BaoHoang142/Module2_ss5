import React, { useState } from 'react'

export default function Baitap2() {
    const [text,setText] = useState("");
    const [count,setCount]= useState(0)
    const [arr,setArr] = useState("")
    // const [totalWords,setTotalWords] = useState("")}
    const countWords =()=>{
        setCount(text.length)
        setArr(text)
        setText("")
        
    }
    
  return (
    <>
    <input 
    type="text"
    onChange={(e)=>setText(e.target.value)}
    value={text}
    placeholder='Mời nhập chữ'
    />
    <button onClick={countWords}>Tra</button>
    <p>Dãy ký tự nhập vào là: {arr} </p>
    <p>Tổng số ký tự nhập vào là: {count} </p>

    </>
  )
}
