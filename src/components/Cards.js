import React from 'react'
import Badges from './Badges'
import CardInfo from './CardInfo'

const Cards = (props) => {
    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

                .card{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 7px;
                    gap: 10px;
                    z-index: 0;
                }
                .card .cardTop{
                    display: flex;
                    gap: 5px;
                }
                .card .cardTop .cardLabel{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
                .cardTop i{
                    opacity: 0;
                    transition: 200ms;
                }
                .cardTop:hover i{
                    opacity: 1;
                    cursor: pointer;
                }
                .card .cardTitle{
                    display: flex;
                    justify-content: start;
                    flex-direction: row;
                }
                .card .cardTitle i{
                    margin-top: 7px;
                    font-size: 14px;
                    opacity: 0;
                    transition: 200ms;
                    cursor: pointer;
                }
                .card .cardTitle i:hover{
                    margin-top: 7px;
                    font-size: 14px;
                    opacity: 1;
                }
            `}
            </style>
            <div className='card' style={{ backgroundColor: props.cardColor }} >
                <div className="cardTop">
                    <div className="cardLabel">
                        {
                            props.task?.badges?.map((item, index) => {
                                return <Badges msg={item.text} color={item.color} />
                            })
                        }
                        <i className="fa-solid fa-trash dropstart" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu" style={{ backgroundColor: '#F1E9DA' }}>
                            <li><p className="dropdown-item" style={{ margin: '0px', padding: '0px', textAlign: 'center' }} onClick={() => { props.delCard(props.id) }}>Delete card</p></li>
                        </ul>
                    </div>
                </div>
                <div className="cardTitle">
                    <h5>{props.title}</h5>
                    <i className="fa-solid fa-eye ms-2" onClick={() => {<CardInfo/>}}></i>
                </div>
                <div className="cardFooter" style={{ fontSize: '14px', fontFamily: 'Varela Round' }}>
                    <p><i className="fa-solid fa-calendar-days" style={{ marginRight: '5px' }}></i> {props.time}</p>
                </div>
            </div>
        </>
    )
}

export default Cards