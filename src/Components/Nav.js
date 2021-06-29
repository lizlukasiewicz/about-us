import { 
    BrowserRouter as Router,
    Link } from 'react-router-dom'

export default function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <Router>
                <li className="nav-item"><Link to="/"> - Home - </Link></li>
                <li className="nav-item"><Link to="/about"> - About us - </Link></li>
                <li className="nav-item"><Link to="/people"> - Our Team - </Link></li>
                </Router>
            </ul>

        </nav>
    )
}