import React from 'react'
import {Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Blog from './pages/Blog'
import AboutMe from './pages/AboutMe'
import Project from './pages/Project'
import Creators from './pages/Creators'

const App = () => {
  return (

      <Router>
     
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
      

  )
}

export default App
