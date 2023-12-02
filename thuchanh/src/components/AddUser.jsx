import React, { useState } from 'react'

export default function AddUser() {
    const [job,setJob]=useState([]);
    const [jobs,setJobs] = useState("");
    const addJob=(e)=>{
        let newJob= e.target.value;
        setJob(newJob)
    }
    const handleAdd=()=>{
        setJobs([...jobs,job])
        setJob("")
    }
  return (
    <>  
    
    </>
  )
}
