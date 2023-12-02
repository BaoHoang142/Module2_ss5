import React, { useState } from 'react'

 function UseState() {
    const[count, setCount] = useState(0);
    const[product,setProduct]=useState("");
    const[title,setTitle]=useState("");
    const [jobs,setJobs] = useState([]);
    const [job,setJob] = useState("")
    
    const increaseCount=()=>{
        setCount(count+1);
        console.log(count);
    }
    // thêm công việc
    const changeValue=(e)=>{
        let newJob= e.target.value;
        setJob(newJob)
    }
    const addTodo=()=>{
        setJobs([...jobs,job])
        setJob("")
    }
    
  return (
    <>
        <p>count: {count}</p>
        <button onClick={increaseCount}>Click</button>
        <p>Bạn muốn mua sản phẩm gì? {product}</p>
        <button onClick={()=>setProduct("Quần")}>Quần</button>
        <button onClick={()=>setProduct("Áo")}>Áo</button>
        <button onClick={()=>setProduct("Dép")}>Dép</button><br /><br />
        <input 
        type="text" 
        onChange={(e)=>setTitle(e.target.value)}
        /><br />
        <p>text vừa nhập: {title}</p> <br />
        {/* ô input nhập dữ liệu thêm  công việc */}
        <input 
        type="text" 
        onChange={changeValue}
        value={job}
        />
        <button onClick={addTodo}>Thêm công việc</button>
        <ul>
            {jobs.map((item,index)=>{
                return <li key = {index}>{item}</li>
            })}
        </ul>
    </>
  )
}
export default UseState;
