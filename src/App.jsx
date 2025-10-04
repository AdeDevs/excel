import { Route, Router, Routes } from "react-router-dom"
import NavBar from "./screens/Nav"
import HomePage from "./screens/Home"

function App() {
  return (
    <div className='parent'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  )
}

export default App
