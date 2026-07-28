import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import '../styles/pages/notFound.scss'
import '../styles/base/global.scss'

const NotFound = () => {
    return (
        <>
            <Navbar/>

            <main>
                <h1>Erreur 404 - Not found</h1>
                <p>La page à laquelle vous tenter d'accéder n'existe pas ou n'a pas été trouvée</p>
            </main>

            <Footer/>
        </>
    )
        
}

export default NotFound