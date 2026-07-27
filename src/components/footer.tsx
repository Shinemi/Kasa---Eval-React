import { Link } from "react-router-dom"


const Footer = () => (
    <footer>
        <div>
            <div>
            <h2>A propos de Kasa</h2>
            <ul>
                <li><Link to="+">Notre Histoire</Link></li>
                <li><Link to="+">Equipes</Link></li>
                <li><Link to="+">Carrières</Link></li>
                <li><Link to="+">Presse</Link></li>
            </ul>
            </div>

            <div>
                <h2>Support</h2>
                <ul>
                    <li><Link to="+">Centre d'aide</Link></li>
                    <li><Link to="+">Nous contacter</Link></li>
                    <li><Link to="+">Signaler un problème</Link></li>
                    <li><Link to="+">Page 404</Link></li>
                </ul>
            </div>

            <div>
                <h2>Légal</h2>
                <ul>
                    <li><Link to="+">Conditions d'utilisation</Link></li>
                    <li><Link to="+">Politique de confidentialité</Link></li>
                    <li><Link to="+">Mention légales</Link></li>
                    <li><Link to="+">Cookies</Link></li>
                </ul>
            </div>
            <p>© 2024 Kasa. Tous droits réservés.</p>
        </div>
        
    </footer>
    
    
)

export default Footer