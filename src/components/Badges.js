import React from 'react'

const Badges = (props) => {
    return (
        <div>
            <span className={`badge rounded-pill text-bg-${props.color}`}>
                {props.msg}
                {props.close && 
                    <i  className="fa-sharp fa-solid fa-xmark" 
                        style={{ marginLeft: '5px', cursor: 'pointer' }}
                        // onClick={()=>{props.onClose ?props.onClose():""}}
                    ></i>}
            </span>
        </div>
    )
}

export default Badges