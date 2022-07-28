import { useState } from 'react'
import './App.css'
import Authors from './components/Authors'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {
const getRandomElements = arr =>{
  const indexrandom = Math.floor(Math.random()*arr.length)
  return arr[indexrandom]
}

let phrasesRandom=getRandomElements(quotes)
const [randomphrases, setrandomphrases] = useState(phrasesRandom)
let colorsRamdom=getRandomElements(colors)
const [randomcolors, setrandomcolors] = useState(colorsRamdom)

const backgroundcolors={
  backgroundColor:randomcolors
}

const getRamdonAll= () => {
  let phrasesRandom=getRandomElements(quotes)
  let colorsRamdom=getRandomElements(colors)
  setrandomphrases(phrasesRandom)
  setrandomcolors(colorsRamdom) 
}

return (
    <div className="App" style={backgroundcolors}>
     <div className='card'>
       <QuoteBox randomphrases={randomphrases.quote}  randomcolors={randomcolors}/>
      <br />
      <Authors randomphrasesauthor={randomphrases.author} randomcolors={randomcolors} getRamdonAll={getRamdonAll}/>    
      </div>
    </div>
  )
}

export default App
