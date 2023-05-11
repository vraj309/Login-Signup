import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Signup from '../src/Signup'
import Login from '../src/Login'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />}>  </Route>
    <Route path='/signup' element={<Signup />}>  </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App