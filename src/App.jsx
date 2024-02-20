import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Login from "./components/login/Login"
import NotFound from "./components/NotFound/NotFound"
import Todos from "./components/ToDos/Todos"
import Categories from "./components/Categories/Categories"
import AuthProvider from "./contexts/AuthContext"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            
            <Route path="/" element={<ProtectedRoute><Todos /></ProtectedRoute>} />
            <Route path="/todos" element={<ProtectedRoute><Todos /></ProtectedRoute>} />
            <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer/>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
