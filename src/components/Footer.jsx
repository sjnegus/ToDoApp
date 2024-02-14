import { useAuth } from "../contexts/AuthContext";
import Logout from "./login/Logout"

export default function Footer() {
    const { currentUser } = useAuth()
  return (
    <>
        {currentUser && <Logout/>}
        <footer className='text-center footerText bg-dark p-4'>
            <strong>
                &copy; {new Date().getFullYear()} Sam Negus Development
            </strong>
        </footer>
    </>
    
  )
}