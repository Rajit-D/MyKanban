import React, { useState } from 'react'
import axios from 'axios';
import Navbar from './components/Navbar'
import './App.css'
import Boards from './components/Boards'
import UserBoard from './components/UserBoard'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import AddTask from './components/AddTask';
import NewTask from './components/NewTask';
import CardInfo from './components/CardInfo';

const App = () => {
  const [toDoData, setToDoData] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    let add;

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    if (source.droppableId === 'ToDoBoard' && destination.droppableId === 'InProgressBoard') {
      let ind = toDoData.findIndex((item) => parseInt(item.id) === parseInt(result.draggableId))
      add = toDoData[ind];
      console.log(add);
      const newData = {
        title: add.title,
        badges: add.badges,
        desc: add.desc,
        date: add.date,
        boardTitle: "progress",
        id: add.id
      }

      toDoData.splice(ind, 1, newData);
      setToDoData(toDoData);

      axios.put(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${add.id}`, newData)
    }

    if (source.droppableId === 'InProgressBoard' && destination.droppableId === 'ToDoBoard') {
      let ind = toDoData.findIndex((item) => parseInt(item.id) === parseInt(result.draggableId))
      add = toDoData[ind];
      console.log(add);
      const newData = {
        title: add.title,
        badges: add.badges,
        desc: add.desc,
        date: add.date,
        boardTitle: "to-do",
        id: add.id
      }

      toDoData.splice(ind, 1, newData);
      setToDoData(toDoData);

      axios.put(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${add.id}`, newData)
    }

    if (source.droppableId === 'InProgressBoard' && destination.droppableId === 'DoneBoard') {
      let ind = toDoData.findIndex((item) => parseInt(item.id) === parseInt(result.draggableId))
      add = toDoData[ind];
      console.log(add);
      const newData = {
        title: add.title,
        badges: add.badges,
        desc: add.desc,
        date: add.date,
        boardTitle: "done",
        id: add.id
      }

      toDoData.splice(ind, 1, newData);
      setToDoData(toDoData);

      axios.put(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${add.id}`, newData)
    }

    if (source.droppableId === 'DoneBoard' && destination.droppableId === 'InProgressBoard') {
      let ind = toDoData.findIndex((item) => parseInt(item.id) === parseInt(result.draggableId))
      add = toDoData[ind];
      console.log(add);
      const newData = {
        title: add.title,
        badges: add.badges,
        desc: add.desc,
        date: add.date,
        boardTitle: "progress",
        id: add.id
      }

      toDoData.splice(ind, 1, newData);
      setToDoData(toDoData);

      axios.put(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${add.id}`, newData)
    }

    if (source.droppableId === 'ToDoBoard' && destination.droppableId === 'DoneBoard') {
      let ind = toDoData.findIndex((item) => parseInt(item.id) === parseInt(result.draggableId))
      add = toDoData[ind];
      console.log(add);
      const newData = {
        title: add.title,
        badges: add.badges,
        desc: add.desc,
        date: add.date,
        boardTitle: "done",
        id: add.id
      }

      toDoData.splice(ind, 1, newData);
      setToDoData(toDoData);

      axios.put(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${add.id}`, newData)
    }

    if (source.droppableId === 'DoneBoard' && destination.droppableId === 'ToDoBoard') {
      let ind = toDoData.findIndex((item) => parseInt(item.id) === parseInt(result.draggableId))
      add = toDoData[ind];
      console.log(add);
      const newData = {
        title: add.title,
        badges: add.badges,
        desc: add.desc,
        date: add.date,
        boardTitle: "to-do",
        id: add.id
      }

      toDoData.splice(ind, 1, newData);
      setToDoData(toDoData);

      axios.put(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${add.id}`, newData)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <Navbar brand="My Kanban" userDetails="User Details" />
        <div className="col">
          <div className="row" style={{width: '100%'}}>
            <UserBoard title="Users" />
            <Droppable droppableId="ToDoBoard">
              {
                (provided) => {
                  return (
                    <div className='container my-3' style={{margin: '0px', padding: '0px'}} ref={provided.innerRef}
                      {...provided.droppableProps}>
                      <Boards
                        title="To-Do"
                        boardID="01"
                        taskData={toDoData}
                        setTaskData={setToDoData}
                      />
                      {provided.placeholder}
                    </div>
                  )
                }
              }
            </Droppable>
            <Droppable droppableId="InProgressBoard">
              {
                (provided) => {
                  return (
                    <div className='container my-3' style={{margin: '0px', padding: '0px'}} ref={provided.innerRef}
                      {...provided.droppableProps}>
                      <Boards
                        title="In Progress"
                        boardID="02"
                        taskData={toDoData}
                        setTaskData={setToDoData}
                      />
                      {provided.placeholder}
                    </div>
                  )
                }
              }
            </Droppable>
            <Droppable droppableId="DoneBoard">
              {
                (provided) => {
                  return (
                    <div className="container my-3" style={{margin: '0px', padding: '0px'}} ref={provided.innerRef}
                      {...provided.droppableProps}>
                      <Boards
                        title="Done"
                        boardID="03"
                        taskData={toDoData}
                        setTaskData={setToDoData}
                      />
                      {provided.placeholder}
                    </div>
                  )
                }
              }
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
    // <NewTask/>
    // <CardInfo/>
  );
}

export default App