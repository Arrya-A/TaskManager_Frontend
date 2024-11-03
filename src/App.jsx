import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Task from './pages/Task'
import Auth from './pages/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Task />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
      </Routes>
    </>
  )
}

export default App
