import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import TOS from './components/pages/TOS'
import Trips from './components/pages/Trips'
import Career from './components/pages/Career'
import { Layout } from './components/Layout'
function App() {
  return (
    <>
    <Layout>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/TOS' element={<TOS/>}/>
            <Route path='/trips' element={<Trips/>}/>
            <Route path='/career' element={<Career/>}/>
          </Routes>
      </Router>
    </Layout>
    </>
  );
}

export default App;
