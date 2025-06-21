import React, { useContext } from 'react'
import State from '../hooks/State'
import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/userContext'
const About = () => {
  const name=useContext(UserContext)
  return (
    <div>
      <h1>{name}</h1>
        <Link to='/state'>UseState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link> <br />
        <Link to='/effect'>Effect</Link> <br />
        <Link to='/reducer'>Reducer</Link>
    </div>
  )
}

export default About