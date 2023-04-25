import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from './../Redux/Action';



const Like = () => {
  const dispatch=useDispatch()
  const {likes}=useSelector(state=>state.LikeReduser)

  return (
    <div className='button-controls'>
      <button onClick={()=>dispatch(increment())}>🤍{likes} </button>
      <button onClick={()=>dispatch(decrement())}>👎</button>
    </div>
  )
}

export default Like
