import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import '../styles/pages/notFound.scss'
import '../styles/base/global.scss'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <Navbar/>

            <main className="error404">
                <h1>Erreur 404 - Not found</h1>
                <p id="descriptif404">La page à laquelle vous tenter d'accéder n'existe pas ou n'a pas été trouvée</p>
                <Link to={'/'} id="returnHome">Retourner à l'accueil</Link>
            </main>

            <Footer/>
        </>
    )
        
}

export default NotFound