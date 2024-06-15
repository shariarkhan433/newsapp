import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Routes>
        <NavBar/>
        <News pageSize={6} country="us" category="sports"/>
        </Routes>
        </Router>
      </div>
    )
  }
}