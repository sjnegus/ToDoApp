import { useAuth } from "../../contexts/AuthContext";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        return navigate('/')
    }

  return (
    <div className="login">
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className="text-center">Welcom to Proj-X!</h1>
        </article>
        <div className="container">
            <Card className="m-2 border-dark text-center">
                <Card.Header>
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    <button className="btn btn-success" onClick={() => handleAuth()}>
                        Login w/ GitHub
                    </button>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}