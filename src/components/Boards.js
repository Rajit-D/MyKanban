import axios from 'axios';
import React, { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import AddTask from './AddTask'
import Cards from './Cards'

const Boards = (props) => {

    const url1 = 'https://63c038eba177ed68abc29f99.mockapi.io/kanban';

    const getData = async () => {
        let data = await axios.get(url1);
        props.setTaskData(data.data);
    }

    const delCard = async (id) => {
        const tempStorage = props.taskData.filter((item) => item.id !== id);
        console.log(tempStorage);
        axios.delete(`https://63c038eba177ed68abc29f99.mockapi.io/kanban/${id}`)
        props.setTaskData(tempStorage);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <style>
                {`
                .board{
                    height: 300px;
                    z-index: 0;
                }
                .boardTitle{
                    color: #F4F4F8
                }
                .boardCards{
                    flex: 1;
                    height: 100%;
                    overflow-y: scroll;
                }
            `}
            </style>
            <div className={`board col-2 my-3 mx-5`} style={{ width: '80%' }}>
                <div className="boardHead" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="boardTitle" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '19px', fontWeight: 'bold' }}>{props.title}
                            <span className="badge text-bg-dark ms-2">
                            {(props.title === "To-Do") ? props.taskData.filter(item => item.boardTitle === "to-do").length : 
                                (props.title === "In Progress") ? props.taskData.filter(item => item.boardTitle === "progress").length : 
                                (props.title === "Done") ? props.taskData.filter(item => item.boardTitle === "done").length : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="boardCards custom-scroll my-4" style={{ backgroundColor: '#393D3F', padding: '10px' }}>
                    {
                        (props.title === "To-Do") ? props.taskData.filter(item => item.boardTitle === "to-do").map((task, index) => {
                            return (
                                <Draggable draggableId={task.id.toString()} index={index}>
                                    {
                                        (provided) => {
                                            return (
                                                <div className="" ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <Cards
                                                        key={task.id}
                                                        index={index}
                                                        id={task.id}
                                                        boardID={props.boardID}
                                                        title={task.title}
                                                        time={task.date}
                                                        task={task}
                                                        delCard={delCard}
                                                        cardColor="#F38375" />
                                                </div>
                                            )
                                        }
                                    }
                                </Draggable>
                            )
                        }) : (props.title === "In Progress") ? props.taskData.filter(item => item.boardTitle === "progress").map((task, index) => {
                            return (
                                <Draggable draggableId={task.id.toString()} index={index}>
                                    {
                                        (provided) => {
                                            return (
                                                <div className="" ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <Cards
                                                        key={task.id}
                                                        index={index}
                                                        id={task.id}
                                                        boardID={props.boardID}
                                                        title={task.title}
                                                        time={task.date}
                                                        task={task}
                                                        delCard={delCard}
                                                        cardColor="#FEFFA5" />
                                                </div>
                                            )
                                        }
                                    }
                                </Draggable>
                            )
                        }) : (props.title === "Done") ? props.taskData.filter(item => item.boardTitle === "done").map((task, index) => {
                            return (
                                <Draggable draggableId={task.id.toString()} index={index}>
                                    {
                                        (provided) => {
                                            return (
                                                <div className="" ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    <Cards
                                                        key={task.id}
                                                        index={index}
                                                        id={task.id}
                                                        boardID={props.boardID}
                                                        title={task.title}
                                                        time={task.date}
                                                        task={task}
                                                        delCard={delCard}
                                                        cardColor="#9ECE9A" />
                                                </div>
                                            )
                                        }
                                    }
                                </Draggable>
                            )
                        }) : ""
                    }
                    {(props.title === "To-Do") ? <AddTask task={props.taskData} setTaskData={props.setTaskData} type={props.taskData.boardTitle} /> : ""}
                </div>
            </div>
        </>
    )
}

export default Boards