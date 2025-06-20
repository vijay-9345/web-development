import React from 'react'
import { Link } from 'react-router-dom'
const State = () => {
    const [count,setCount]=useState(0)
    const [like,setlike]=useState(0)
    const [dislike,setdislike]=useState(0)

    const handleIncrement=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <h1>Like: {like} and Dislike: {dislike}</h1>
    <button onClick={()=>setlike(like+1)}>Like</button>
    <button onClick={()=>setdislike(dislike+1)}>Dislike</button>
    </div>
  )
}

export default State