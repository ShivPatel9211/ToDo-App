import React from 'react'
import './App.css';

function List(props) {
    return (
        <>
        <li>{props.value}  <button id = 'close-btn' onClick={()=>{
            props.func(props.id)
        }}>X</button></li>

        </>
    )
}
export default List;