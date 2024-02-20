// Below we are making a component that redirects the unauthenticated user to the login screen. We pass in children in the params as a prop which refers to any component that is nested inside of ProtectedRoute tags.

import { useAuth } from "../contexts/AuthContext"
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    const { currentUser } = useAuth()

    // A rare example of a good one-line return below
    // We check if the currentUser exists. If so, show children. If not, send to /login.
  return currentUser ? children : <Navigate to='/login'/>
}