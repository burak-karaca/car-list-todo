import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Left from './components/Left'
import Right from './components/Right'
import Bottom from './components/Bottom'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Left/>
        <Right/>
        <Bottom/>
      </div>
    )
  }
}

export default App;