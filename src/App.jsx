import { Fragment } from 'react'
import './App.css'
import Objects from './objects/Objects';

function App() {

  return (
    <Fragment>
      <h2>Поемы</h2>
      <div className='main-cont'>
        {Objects.map(obj => (
          <div className='second-cont' key={obj.id} >
            <h3>{obj.title}</h3>
            <p className='text'>{obj.text}</p>
            <p>{obj.author}</p>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default App
