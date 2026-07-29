import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import '../styles/components/Navbar.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>    
        <Link to="/" className="logo">Kasa</Link>
        <nav >
        <button
            className="burger-menu"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
            {isOpen ? <X /> : <Menu />}
        </button>

            <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
                <li><Link to="/*" onClick={() => setIsOpen(false)}>À propos</Link></li>
                <li><Link to="/*" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar