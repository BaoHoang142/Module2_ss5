import React,{useState,useRef} from 'react'
import './Todo.scss'
export default function Todolist() {
    const [users,setUsers] = useState([
        {
          name:"Minh Tran",
          id:1,
          status:false
        },
        {
            name:"NamPer",
            id:2,
            status:false
        },
        {
            name:"XuanMike",
            id:3,
            status:false
        },
    ])
    const [obj,setObj] = useState({})    
    const [text,setText] = useState("")
    // thay doi trang thai
    const changeStatus = (id)=>{
        let index = users.findIndex((item)=>{
            return item.id == id
        })
        let arr =[...users]
        arr[index].status = !arr[index].status
        setUsers(arr)
    }
    //tao id
    const uuid = ()=>{
        return Math.floor(Math.random()*99999)
    }
    // lay du lieu o input
    const changeValue=(e)=>{
        setText(e.target.value)
        setObj({
            name: e.target.value,
            id: uuid(),
            status:false
        })
        // console.log(newArr);
    }
    //them
    const adduser = ()=>{
        if(text){
          setUsers([...users,obj])
        }
        setText("")
    }
    //Xoa
    const deleteUser = (id)=>{
        let confirmDelete = confirm("Bạn có muốn xoá người dùng hay không?");
        if (confirmDelete) {
            let index = users.findIndex((item)=>{
                return item.id == id
            })
            let newArr = [...users]
            newArr.splice(index,1)
            setUsers(newArr)
        }
       
    }
    
    //edit
    const [flag,setFlag]= useState("")
    const [editUser,setEditUser] = useState(false);
    const handleEdit = (id)=>{
        let index = users.findIndex((e)=>{
            return e.id == id
        })
        setFlag(true)
        setText(users[index].name)
        setEditUser(index)
    }
    //update
    const handleUpdate = () => {
        let result = [...users]
        result[editUser].name = text
        setUsers(result)
        setText("")
        setFlag(false)
    }
  return (
    <>
    <div className='form'>
    <h1>Todo List</h1>
    <p className='title'>Get things the to to list, try to somethings</p>
      <hr />
      <ul>
          {
              users.map((item,index)=>{
                  let check = item.status
                  let checker = check?"line-through":""
                  // console.log(check);
                  return <li key={index}  >
                            <p className='infor' style={{textDecoration:checker}} >{item.name}</p>  
                            <div className='deleteBox'>
                                <input 
                                className='checkbox'
                                type="checkbox"
                                checked={item.status}
                                onChange={()=>changeStatus(item.id)}
                                />
                                <button className='btn btn1' onClick={()=>{ handleEdit(item.id)}}><span >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                </span></button>
                                <button className='btn btn2' onClick={()=>{ deleteUser(item.id)}}><span >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                  </svg>
                                </span></button>
                            </div>
                          </li>
              })
          }
      </ul>
      <h6>Add to the do list</h6>
      <input className='inputUser' type="text" onChange={changeValue} value={text}/>
      <button className='addItem' onClick={flag? handleUpdate: adduser}>ADD ITEM</button>
    </div>
    
    </>
  )
}