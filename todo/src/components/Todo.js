import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoAction } from '../store/store';

function Todo (){
    const list = useSelector((state) => state.todo.list);
    const dispatch = useDispatch();

    const [task, settask] = useState("");

    const handlechange =(e)=> {
        settask(e.target.value);
    }
    const handlesubmit = () => {
        dispatch(todoAction.settask(task));
    }
    const deleteNote = (index) => {
        dispatch(todoAction.deletetask(index));
    }
  return (
      <>
          <input type="text" onChange={handlechange}/>
          <button onClick={handlesubmit}>add</button>
          <div>
              {list.map((text, index) => <div key={index} onClick={() => deleteNote(index)}>{ text }</div>)}
          </div>
      </>
  )
}

export default Todo