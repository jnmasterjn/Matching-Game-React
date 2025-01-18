import { useState } from 'react'
import Container from './components/Container'
import Score from './components/Score'

function App() {

  const [score,setScore]=useState(0)

  return (
    <>
    <Score
      steps={score}
    />

    <Container
      score = {score}
      setScore = {setScore}
    />
    
    </>
  )
}

export default App