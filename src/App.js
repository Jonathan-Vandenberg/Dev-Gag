import React, { useState, useEffect } from 'react'
import JokesList from './JokesList'

import './App.css'

var axios = require('axios').default

function App() {
  const [jokes, setJokes] = useState([])

  const jokeHandler = () => {
    var options = {
      method: 'GET',
      url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
      headers: {
        'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com',
        'x-rapidapi-key': '238f019ceamsh555090a8d52cec6p1178e5jsn2e7cd458b6c3'
      }
    }

    axios
      .request(options)
      .then((response) => {
        const transformedData = response.data.map((jokeData) => {
          return {
            image: jokeData.image
          }
        })
        setJokes(transformedData)
        console.log(transformedData)
      })
      .catch(function (error) {
        console.error(error)
      })

    window.scrollTo(0, 0)
  }

  return (
    <div className='App'>
      <h1>Dev-Gag</h1>
      <JokesList jokes={jokes} />
      <button onClick={jokeHandler}>Make meh Laugh!</button>
    </div>
  )
}

export default App
