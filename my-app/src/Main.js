import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/pages/About' element={<About />}/>
      <Route exact path='/pages/Projects' element={<Projects />}/>
    </Routes>
  );
}

export default Main;