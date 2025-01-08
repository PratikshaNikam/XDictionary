import { useState } from 'react'

import './App.css'
//import words from './words.json'

function App() {
  const [definition, setDefinition] = useState('')
  const [word, setWord] = useState('')


  
const words=[

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]

  
  
  
  const searchWord = () => {
    const wordData = words.find((wordObj) => wordObj.word.toLowerCase() === word.toLowerCase())
    if (wordData) {
      setDefinition(wordData.meaning)
    } else {
      setDefinition('Word not found in the dictionary.')
    }

    
    
  }

  //console.log(definition)
  //console.log(words[word])
  //console.log(word)
  return (
    <>
      <h1>Dictionary App</h1>
      <div>
        <input type="text" onChange={(e) => setWord(e.target.value)} />
        <button onClick={searchWord}>Search</button>
      </div>
      <h3>Definition: </h3>
      <p>{definition}</p>
     
      
      
    
    </>
  )
}

export default App
