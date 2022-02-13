import React from 'react'
import Joke from './Joke'

const JokesList = ({ jokes }) => {
  return (
    <ul>
      {jokes.map((joke) => (
        <Joke joke={joke} key={Math.random().toString()}></Joke>
      ))}
    </ul>
  )
}

export default JokesList
