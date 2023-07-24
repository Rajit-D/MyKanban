import axios from 'axios';
import React, { useState } from 'react'
import NewTask from './NewTask';

const AddTask = (props) => {

  const [close, setClose] = useState(false);
  const [badge, setBadge] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addingTask = (e) => {
    e.preventDefault();
    addTask(newTitle, props.type, desc);
    setClose(false);
  }

  const addTask = (title, boardTitle, desc) => {
    let delID;
    if (props.task.slice(-1)[0] === undefined)
      delID = 0;
    else
      delID = parseInt((props.task.slice(-1)[0]).id);

    let time= new Date();
    let currentTime=time.toDateString();

    let newTask = {
      id: delID + 1,
      title: title,
      badges: [badge],
      boardTitle: "to-do",
      desc: desc,
      date: currentTime
    }

    const tempTasks = [...props.task];
    tempTasks.push(newTask);
    axios.post('https://63c038eba177ed68abc29f99.mockapi.io/kanban', newTask);
    props.setTaskData(tempTasks);
  }

  return (
    <>
      <style>
        {`
          .addTask{
            padding: 10px;
            background-color: antiquewhite;
            border-radius: 10px;
          }
          .addTask .add input{
            width: 100%;
          }
          .addFooter{
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
      <div className='addTask'>
        {close ?
          // (<form className="add">
          //   <input boardTitle="text" placeholder='Enter a task' onChange={(e) => { setNewTitle(e.target.value) }} />
          //   <span class="badge rounded-pill text-bg-success mt-2"
          //     style={{ cursor: 'pointer' }}
          //     onClick={() => {
          //       setBadge({
          //         text: "personal",
          //         color: "success"
          //       })
          //     }}>personal</span>
          //   <span class="badge rounded-pill text-bg-info ms-3 mt-2"
          //     style={{ cursor: 'pointer' }}
          //     onClick={() => {
          //       setBadge({
          //         text: "official",
          //         color: "info"
          //       })
          //     }}>official</span>
          //   <div className="addFooter">
          //     <button className="btn btn-sm btn-danger mt-3" boardTitle='submit' onClick={addingTask}>Add</button>
          //     <i className="fa-sharp fa-solid fa-xmark"
          //       style={{ marginTop: '19px', cursor: 'pointer', fontSize: '20px', paddingRight: '4px' }}
          //       onClick={(e) => {
          //         e.preventDefault();
          //         setClose(false);
          //       }}
          //     ></i>
          //   </div>
          // </form>)
          <NewTask close={close} setClose={setClose} addingTask={addingTask} badge={badge} setBadge={setBadge} setNewTitle={setNewTitle} setDesc={setDesc} />
           :
          (<p style={{ fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', marginTop: '10px', fontSize: '20px' }} onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}>+ Add Task</p>)}
      </div>
    </>
  )
}

export default AddTask