import React from 'react'

const NewTask = (props) => {
    return (
        <>
            <style>
                {`
                    .pop-up{
                        width: 100%;
                        height: 100%;
                        display: grid;
                        place-items: center;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        position: fixed;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 1;
                    }
                    .pop-up .newTask{
                        width: 500px;
                        height: auto;
                        padding: 20px;
                        background-color: black;
                        border-radius: 12px;
                        color: white;
                        display: flex;
                        flex-direction: column;
                    }
                    .pop-up .newTask .newTaskHead{
                        display: flex;
                        justify-content: space-between;
                    }
                    .pop-up .newTask form{
                        display: flex; 
                        justify-content: center; 
                        flex-direction: column
                    }
                    .pop-up .newTask form .badgeContainer{
                        display: flex;
                        justify-content: flex-start;
                    }
                `}
            </style>
            {
                props.close &&
                <div className="pop-up">
                    <div className="newTask">
                        <div className="newTaskHead">
                            <h1 className="display-6 mt-2 mb-4" style={{ color: "#F4F4F8" }}>Task description</h1>
                            <i class="fa-solid fa-xmark"
                                style={{ position: 'relative', color: 'white', fontSize: '35px', cursor: 'pointer' }}
                                onClick={() => props.setClose(!props.close)}></i>
                        </div>
                        <form>
                            <div class="input-group mb-4" style={{ width: '100%' }}>
                                <span class="input-group-text">Name</span>
                                <input type="text" aria-label="First name" class="form-control" />
                                <input type="text" aria-label="Last name" class="form-control" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Job title</span>
                                <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => { props.setNewTitle(e.target.value) }} />
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Job description</span>
                                <textarea class="form-control" aria-label="Job description" placeholder='' style={{ fontSize: '10px', height: '80px' }} onChange={(e) => { props.setDesc(e.target.value) }}></textarea>
                            </div>
                            <div className="badgeContainer mt-3">
                                <span class="badge rounded-pill text-bg-success mt-2"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        props.setBadge({
                                            text: "personal",
                                            color: "success"
                                        })
                                    }}>personal</span>
                                <span class="badge rounded-pill text-bg-info ms-3 mt-2"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        props.setBadge({
                                            text: "official",
                                            color: "info"
                                        })
                                    }}>official</span>
                            </div>
                            <div className="newTaskFoot">
                                <button className="btn btn-sm btn-secondary mt-4" onClick={props.addingTask}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div >}
        </>
    )
}

export default NewTask