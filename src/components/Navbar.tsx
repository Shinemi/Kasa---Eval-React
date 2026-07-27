import { Link } from "react-router-dom"

const Navbar = () => ( 
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='+'>A propos</Link>
            <Link to='+'>Contact</Link>
        </nav>
);

export default Navbar
