import React from 'react'

const Welcome = (props) => {
  return (
    <div>
      <h1>hello {props.name}</h1>
      <h2> i am from {props.country}</h2>
    </div>
  )
}

export default Welcome
