import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Common components/Navbar';
// import Footer from './components/Common components/Footer';



const App = () => {
  
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" component={<Home />} />
          {/* <Route path="/home" component={<Home />} /> */}
          <Route path="/about" component={<About />} />
          <Route path="/contact" component={<Contact />} />
          <Route path="/signin" component={<SignIn />} />
          <Route path="/signup" component={<SignUp />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>

  )
}

export default App;


