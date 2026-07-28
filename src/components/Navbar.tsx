import { Link } from "react-router-dom"

const Navbar = () => ( 
    <header>
        <a href="/">Kasa</a>
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/*'>A propos</Link>
            <Link to='/*'>Contact</Link>
        </nav>
    </header>
);

export default Navbar
