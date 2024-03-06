import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/index'
import { Home } from './pages/Home/index'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Logout } from './pages/Logout/index'
import { Protected } from './components/Protected'
import { NewStory } from './pages/NewStory'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/new-story' element={<NewStory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
