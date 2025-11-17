import { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Task from './components/Task'



function App() {
  const initialtaskvalue = {
    title:"",
    desc:"",
  }
  const [taskList,setTaskList] = useState({initialtaskvalue});
  const [tableData,settableData] = useState([])
  const [editTask,setEditTask] =useState({});
  const [editIndex,setEditIndex] =useState(null)
  //const [editIdx,setEditIdx] =useState(null);
  
  

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home tableData={tableData} setEditIndex={setEditIndex} setTaskList={setTaskList} />}/>
      <Route path="/task" element={<Task initialtaskvalue={initialtaskvalue} taskList={taskList} setTaskList={setTaskList} tableData={tableData} settableData={settableData} editIndex={editIndex} setEditIndex={setEditIndex}/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App