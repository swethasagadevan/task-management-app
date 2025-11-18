import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Task = ({initialtaskvalue,tableData,settableData,taskList,setTaskList,editIndex,setEditIndex}) => {
   
     const navigator = useNavigate()
    
    const handleTaskList =(key,value)=>{
    // console.log({key,value});
    setTaskList({...taskList,[key]:value,});
  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    if (editIndex==null){
        settableData([...tableData,taskList])
    navigator("/home")
    setTaskList(initialtaskvalue)
    }
    else{
        tableData[editIndex] = taskList;
        setTaskList(initialtaskvalue);
        setEditIndex(null);
        settableData(tableData)
        navigator("/home")
    }


  }


  //console.log(tableData);

    

    // const [newtask,setNewTask]=useState({...editTask});

    // const addtotasklist = (e,key)=>{
    //     // console.log(e.target.value)
    //     const {value}=e.target;
    //     setNewTask(prevNewList=>({...prevNewList,[key]:value}));
    //     // console.log(newtask)
    // }

     //const handleSubmit=(e,index)=>{
        // e.preventDefault();
    //     console.log(editiIdx)
    //     if(editiIdx==null){
    //         setTaskList(prevTaskList => [...prevTaskList,newtask])
      //       navigator("/home")
    //     }
    //     else{
    //         console.log(editiIdx)
    //     }

    // }

    const handleBackbtn=()=>{
        navigator("/home")
    }

 

  return (
    <section className=' p-3 mt-5 mx-36 text-center'>
        <h1 className='text-center bg-green-400 text-2xl font-bold p-3 m-5'>Add task</h1>
        <form className='flex flex-col m-5 text-left' onSubmit={handlesubmit} >
            <label className='font-bold mb-4'>Title:</label> 
            <input type="text" className='border-2 border-gray-400 mx-5 p-2'
             onChange={(e)=>
                {
                    const { value }=e.target;
                    handleTaskList("title",value)
                }
                } value={taskList?.title} required />
            <br/>
            <label className='font-bold mb-4'>Description:</label> 
            <textarea name="descinput" className='border-2 border-gray-400 mx-5 p-2'
            onChange={(e)=>
                {
                    const { value }=e.target;
                    handleTaskList("desc",value)
                }
                } value={taskList?.desc} required ></textarea>
            <br/>

        <div className='text-center'>
            <button className='bg-blue-500 px-4 py-2 rounded-xl' type="submit">{(editIndex==null)? "Add" : "update"}</button>
        </div>
        </form>
        <button className='bg-gray-500 text-white px-4 py-2 mt-10 rounded-xl' onClick={handleBackbtn}>Back to Home</button>
    </section>
  )
}


export default Task;

