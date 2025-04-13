import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
          <Route index element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
