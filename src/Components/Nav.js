import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <div className="navBar" >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/people">Our Team</Link></li>
            </ul>

        </div>
    )
}