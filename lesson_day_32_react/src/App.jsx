import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let file = 'fetch_info.txt'

  try {
    fetch(file)
              .then(response => response.text())
              .then(textString => {
                console.log(textString);
              });
  } catch (err) {
    console.log(err);
  }




  return (
    <>

    </>
  )
}

export default App
