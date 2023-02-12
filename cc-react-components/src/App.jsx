import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Alert from './components/Alert'
import errorAlert from './assets/error.png'
import warningAlert from './assets/warning.png'
import infoAlert from './assets/info.png'
import successAlert from './assets/success.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='alert-container' >
      <Alert 
      type={"error"}
      title={"Error"}
      text={"This is an error alert"}
      icon={errorAlert}
      />
      <Alert 
      type={"warning"}
      title={"Warning"}
      text={"This is a warning alert"}
      icon={warningAlert}
      />
         <Alert 
      type={"info"}
      title={"Info"}
      text={"This is an info alert"}
      icon={infoAlert}
      />
         <Alert 
      type={"success"}
      title={"Success"}
      text={"This is a success alert"}
      icon={successAlert}
      />
      </div>
 
    </div>
  )
}

export default App
