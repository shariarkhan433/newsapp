import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
         
        <NavBar/>   
        <Routes> 
        <Route path="/" element={<News key="general" pageSize={6} country="us" category="general" />} />
        <Route path="/business" element={<News key="business" pageSize={6} country="us" category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment" />} />
        <Route path="/health" element={<News key="health" pageSize={6} country="us" category="health" />} />
        <Route path="/science" element={<News key="science" pageSize={6} country="us" category="science" />} />
        <Route path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />} />
        <Route path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />} />
        </Routes>
       
        </Router>
      </div>
    )
  }
}