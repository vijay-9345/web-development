import React, { useContext } from 'react'

import Reducer from '../hooks/Reducer'
import { ArrayContext } from '../hooks/ArrayContext'



const Services = () => {
   const arr=useContext(ArrayContext)
  return (
    <div>
        <h1>Services</h1>
        <h1>{arr.name} <br /> {arr.age} <br /> {arr.dep} </h1>
        <Reducer/>
    </div>
  )
}

export default Services