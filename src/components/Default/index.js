import {Link} from 'react-router-dom'
import "./index.css"

const Default = () => (
    <div>
        <h1>Default</h1>
        <Link to="/register">
            <button>Register</button>
        </Link>
        <Link to="/login">
         <button>Login</button>
        </Link>
    </div>
)

export default Default