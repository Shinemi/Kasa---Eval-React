import { Link } from "react-router-dom"
import '../styles/components/footer.scss'

const Footer = () => (
    <footer>
        <div>
            <article>
                <h2>A propos de Kasa</h2>
                <ul>
                    <li><Link to="+">Notre Histoire</Link></li>
                    <li><Link to="+">Equipes</Link></li>
                    <li><Link to="+">Carrières</Link></li>
                    <li><Link to="+">Presse</Link></li>
                </ul>
            </article>

            <article>
                <h2>Support</h2>
                <ul>
                    <li><Link to="+">Centre d'aide</Link></li>
                    <li><Link to="+">Nous contacter</Link></li>
                    <li><Link to="+">Signaler un problème</Link></li>
                    <li><Link to="+">Page 404</Link></li>
                </ul>
            </article>

            <article>
                <h2>Légal</h2>
                <ul>
                    <li><Link to="+">Conditions d'utilisation</Link></li>
                    <li><Link to="+">Politique de confidentialité</Link></li>
                    <li><Link to="+">Mention légales</Link></li>
                    <li><Link to="+">Cookies</Link></li>
                </ul>
            </article>
        </div>
            <p>© 2024 Kasa. Tous droits réservés.</p>
        
    </footer>
    
    
)

export default Footer