import React, {useEffect, useState} from 'react'

 function UseEffect() {
    const [count,setCount]= useState(0);
    const [title,setTitle] = useState("");
    // useEffect(()=>{
    //     console.log("thực hiện việc call API để lấy dữ liệu");
    //     // nơi để call API để lấy dữ liệu
    // },[])
    // useEffect(()=>{
    //     // console.log("thực hiện việc call API để lấy dữ liệu");
    //     // nơi để call API để lấy dữ liệu
    // },[title])
    // console.log("222222");
  return (
    <>
    <p>count: {count}</p>
    <button onClick={()=>setCount(count+1)}>Click</button>
    <button onClick={()=>setTitle("get data title")}>click title</button> <br />
    </>
  )
}
export default UseEffect;
