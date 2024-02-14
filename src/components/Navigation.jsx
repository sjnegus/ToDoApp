import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

import { useAuth } from "../contexts/AuthContext"

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
    <Navbar
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="p-3 rounded-4"
    >
      <Navbar.Brand href="/" className="logo">
        Proj-X
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="text-center">
          <Link to="/todos" className="nav-link">
            ToDos
          </Link>
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
          {!currentUser && (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
