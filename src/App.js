import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const TestComponent = () => <p> просто render </p>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> My top photo </h1>{' '}
        </header>{' '}
        <p className="App-intro">Here will be my the most liked photo.</p>{' '}
      </div>
    )
  }
}

export default App
