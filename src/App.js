import React from 'react'
import './App.css'
import List from './components/List'

function App() {
  return (
    <div className="app">
      <header>
        Pokedex
        <label htmlFor="search">
          <span>🔍</span>
          <input id="search" placeholder="Search" />
        </label>
      </header>
      <main className="colorful-border">
        <List>Here we'll render a list of pokemon</List>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
