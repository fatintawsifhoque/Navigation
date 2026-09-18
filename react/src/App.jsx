
import Nav from './component/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'

function App() {
  return (
    <>
      <Nav />
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Project' element={<Project/>} />
      </Routes>
      
    </>
  )
}

export default App
