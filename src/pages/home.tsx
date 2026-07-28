import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import Lodges from "../data/logements.json"
import LodgeCard from "../components/lodgeCard"
import '../styles/home.scss'

const Home = () => {
    return (
        <>               
            <Navbar/>
        
            <main>
                <section id="hero">
                    <h1>Trouvez votre logement idéal</h1>
                    <p>Découvrez des hébergements uniques et vivez comme un local partout dans le monde</p>
                </section>

                <section id="logementSection">
                    {Lodges.map((lodge) => (
                        <LodgeCard
                            key={lodge.id}
                            id={lodge.id}
                            title={lodge.title}
                            location={lodge.location}
                            pictures={lodge.pictures}
                            tags={lodge.tags}
                            host={lodge.host}
                            rating={lodge.rating}
                            description={lodge.description}
                            equipments={lodge.equipments}
                        />
                    ))}
                </section>
            </main>

            <Footer/>
        </>

    )
}

export default Home