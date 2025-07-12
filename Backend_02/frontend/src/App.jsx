import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        console.error('Error fetching jokes:', error)
      })
  })

  return (
    <>
      <h1>List of Jokes coming from backend</h1>
      <p>Total Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={index} className="joke">
            <h2>{joke.id}</h2>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
