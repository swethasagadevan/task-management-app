import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = ({tableData,setEditIndex,setTaskList}) => {
  
  const [newlisttodisplay,setnewlisttodisplay] =useState(tableData || []);
  const navigator = useNavigate()
  const handleAddTaskBtn=()=>{
      navigator("/task")
  }

  const handleEdit =(index)=>{
    // console.log(index)
    const clickedtask = tableData[index]
    setTaskList(clickedtask)
    setEditIndex(index)
    // console.log(TaskList)
    navigator("/task")
  }

 const handleSearch=(e)=>{

    const enteredtext = e.target.value;
    
    if (enteredtext===""){
      setnewlisttodisplay(tableData)
      //setIsVisible(false)
      // console.log(1)
    }
    else{
      setnewlisttodisplay(tableData.filter((list) =>(
        list.title.includes(enteredtext.toLowerCase())
        ||
        list.title.includes(enteredtext.toUpperCase())
      
      )))

      //setIsVisible(true)
      // console.log(2)
    }
    

    // console.log(newlisttodisplay)
  }

  const handleDeletebtn =(index)=>{
    //console.log(index)
    newlisttodisplay.splice(index,1);
    setnewlisttodisplay([...newlisttodisplay])
    //console.log(newlisttodisplay)
  }

  return (
    <section>
        <h1 className='bg-yellow-500 font-bold text-2xl text-center p-2'>Task Management</h1>

        <div className='flex mt-4 mx-3 justify-evenly'>
          <input type="text" placeholder='Search your task here...'  className='border text-center w-3/4 rounded-xl' onChange={(e)=>{handleSearch(e)}}/>
        <button className='bg-emerald-400 px-4 py-2 rounded-xl' onClick={handleAddTaskBtn}>+ Add Task</button>
        </div>

        

        <table className='border p-2 mx-3 my-10 w-full text-center'>
          <thead >
            <tr className='bg-gray-300 border'>
              <th className='w-1/6 p-3'>Task</th>
              <th className='w-1/2 p-3'>Description</th>
              <th className='w-1/4 p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
          {
          newlisttodisplay.map((value,index)=>(
            <tr key={index} className='hover:bg-lime-100'>
              <td className='border p-2'>{value.title}</td>
              <td className='border p-2'>{value.desc}</td>
              <td className='border p-2'>
                <button className='bg-green-500 px-2 py-1 rounded-xl mx-2' onClick={()=>handleEdit(index)}>Edit</button>
                <button className='bg-red-500 px-2 py-1 rounded-xl' onClick={()=>handleDeletebtn(index)}>Delete</button>
              </td>
            </tr>

          ))
          }
             
             </tbody> 
              
        </table>
        <p className='text-gray-600 text-center'>End of results</p>
    </section>
  )
}


export default Home;
