import React from 'react'

const UserBoard = (props) => {
    return (
        <>
            <style>
                {`
                    h2{
                        color: #F4F4F8;
                    }
                `}
            </style>
            <div className='col-1 my-4 mx-5 text-center' style={{width: '230px'}}>
                <div className='userTitle' style={{ marginTop:'7px', fontSize: '19px', fontWeight: 'bold', color:"#F4F4F8" }}>{props.title}</div>
                <div className="userBody my-4" style={{display:'flex', flexDirection:'column', backgroundColor:"#393D3F", height:'300px'}}>
                    <h2 style={{marginTop:'28px'}}>Rajit</h2>
                </div>
            </div>
        </>
    )
}

export default UserBoard