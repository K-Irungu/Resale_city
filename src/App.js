import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Common components/Navbar';
import ThriftHaven from './components/ThriftHaven';
import BudgetBotique from './components/BudgetBotique';
import PrelovedParadise from './components/PrelovedParadise';

const App = () => {


  
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/BudgetBotique" element={<BudgetBotique />} />
          <Route path="/ThriftHaven" element={<ThriftHaven />} />
          <Route path="/PrelovedParadise" element={<PrelovedParadise />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;


