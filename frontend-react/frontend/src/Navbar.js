import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
       <Link to="/" className="site-title">UNIVERSITY OF ARIZONA: REGISTRAR </Link> 
       <ul>
        <li>
            <Link to="./student">Student</Link>
        </li>
        <li>
            <Link to="./faculty">Faculty</Link>
        </li>
        <li>
            <Link to="./addUser">AddUser</Link>
        </li>
       </ul>
    </nav>
}