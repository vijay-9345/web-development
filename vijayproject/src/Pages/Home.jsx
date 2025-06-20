import React from 'react'
import Skills from '../Skills'
import Welcome from '../Welcome'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Welcome name="Python"/>
      <Skills skills={['React','Node','Express','MongoDb']}/>
      <h1>Men Are Brave</h1>
    </div>
  )
}

export default Home
