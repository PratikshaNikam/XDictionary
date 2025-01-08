import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import words from './words.json'

function App() {
  const [defination, setDefination] = useState('p')
  const [word, setWord] = useState('')
  
  
  
  const searchWord = () => {
    
    words.filter((w) => w[word] ? setDefination(w[word]) : setDefination("Word not found in the dictionary."))
    //setDefination(defination1)
  }

  console.log(defination)
  //console.log(words[word])
  console.log(word)
  return (
    <>
      <h1>Dictionary App</h1>
      <div>
        <input type="text" onChange={(e) => setWord(e.target.value)} />
        <button onClick={searchWord}>Search</button>
      </div>
      <p>Defination: {defination}</p>
     
      
      
    
    </>
  )
}

export default App
