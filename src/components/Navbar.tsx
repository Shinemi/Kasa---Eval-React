import { Link } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => ( 
    <header>
        <a href="/" id="logo">Kasa</a>
        <nav>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/*'>A propos</Link></li>
                <li><Link to='/*'>Contact</Link></li>        
            </ul>
        </nav>
    </header>
);

export default Navbar
