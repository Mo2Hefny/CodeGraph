import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { MainMenu } from './pages/MainMenu'
import { Pathfinding } from './pages/Pathfinding';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/pathfinding" exact element={<Pathfinding />} />
      </Routes>
    </Router>
  )
}

export default App
