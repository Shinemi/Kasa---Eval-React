import { useParams, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import Carousel from "../components/carousel"
import Lodges from "../data/logements.json"
import type { lodgeCardProps } from "../components/lodgeCard"

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const lodge: lodgeCardProps | undefined = Lodges.find((lodge) => lodge.id === id)

  if (!lodge) {
    return <Navigate to="/*" replace />
  }

  return (
    <>
      <Navbar />

      <main>
        <Carousel pictures={lodge.pictures} alt={lodge.title} />

        <h1>{lodge.title}</h1>
        <p>{lodge.location}</p>

        <div className="tags">
          {lodge.tags.map((tag, index) => (
            <p key={index} className="tag">{tag}</p>
          ))}
        </div>

        <div className="host">
            <img src={lodge.host.picture} alt={lodge.host.name} />
            <div className="host-info">
                <p className="host-name">{lodge.host.name}</p>
                <p className="host-since">Hôte depuis 3 ans</p>
            </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Details