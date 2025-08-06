import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
   <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Toaster/>
   </div>
   </>
  )
}

export default App
