import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Example array of objects
  const objects = [
    { id: 1, title: 'Card One', description: 'This is the first card.' },
    { id: 2, title: 'Card Two', description: 'This is the second card.' },
    { id: 3, title: 'Card Three', description: 'This is the third card.' },
  ];

  return (
    <>
  
      <h2>Poem</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {objects.map(obj => (
          <div key={obj.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', minWidth: '200px', boxShadow: '2px 2px 8px #eee' }}>
            <h3>{obj.title}</h3>
            <p>{obj.text}</p>
            <p>{obj.author}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
