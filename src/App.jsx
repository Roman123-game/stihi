import { Fragment } from 'react'
import './App.css'
import Objects from './objects/Objects';

function App() {

  return (
    <Fragment>
      <h2>Poem</h2>
      <div className='mainCont'>
        {Objects.map(obj => (
          <div className='secondCont' key={obj.id} >
            <h3>{obj.title}</h3>
            <p>{obj.text}</p>
            <p>{obj.author}</p>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default App
