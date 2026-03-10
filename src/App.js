
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Reg from "./Reg"
import Home from "./Home"
import Login from "./Login"
import { useState } from "react"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
      <>
         <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Reg />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
           </Routes>
         </BrowserRouter>
      </>
    )
}
export default App