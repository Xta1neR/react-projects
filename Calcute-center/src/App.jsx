import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Not_Found from './pages/NotFound/Not_Found';
import Calculator from './pages/calculator/Calculator';
import Currency from './pages/currency/Currency';
import Body_Calculator from './pages/body_calculator/Body_Calculator';
 
const App = () => {
  return (

    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/about" element={<About />}/> */}
          <Route path="/*" element={<Not_Found />} />

          <Route path="/calculator" element={<Calculator />}/>
          <Route path="/currency" element={<Currency />}/>
          <Route path="/body_calculator" element={<Body_Calculator />}/>

        </Routes>
      </Router>

  )
}

export default App
