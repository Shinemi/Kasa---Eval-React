import '../styles/base/global.scss'
import { useParams, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import Carousel from "../components/carousel"
import Collapse from "../components/collapse"
import Lodges from "../data/logements.json"
import type { lodgeCardProps } from "../components/lodgeCard"
import { MapPin } from "lucide-react"
import { Wifi, Utensils, Tv, Snowflake, ParkingCircle, WashingMachine, Dog, Wind, Circle, type LucideIcon} from "lucide-react"

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const lodge: lodgeCardProps | undefined = Lodges.find((lodge) => lodge.id === id)

  if (!lodge) {
    return <Navigate to="/*" replace />
  }



const equipmentIcons: Record<string, LucideIcon> = {
  "Wifi": Wifi,
  "Cuisine": Utensils,
  "Télévision": Tv,
  "Climatisation": Snowflake,
  "Parking": ParkingCircle,
  "Lave-linge": WashingMachine,
  "Animaux acceptés": Dog,
  "Sèche-cheveux": Wind,
}

function getEquipmentIcon(equipment: string): LucideIcon {
  return equipmentIcons[equipment] ?? Circle
}


  return (
    <>
      <Navbar />

      <main>
        <Carousel pictures={lodge.pictures} alt={lodge.title} />

        <h1>{lodge.title}</h1>
        <p><MapPin size={16} />{lodge.location}</p>

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

        <Collapse title="Description" content={lodge.description} />

        <Collapse
            title="Équipements"
            content={
                <ul className="equipments-list">
                {lodge.equipments.map((equipment, index) => {
                    const Icon = getEquipmentIcon(equipment)
                    return (
                    <li key={index}>
                        <Icon size={18} />
                        {equipment}
                    </li>
                    )
                })}
                </ul>
              }
          />

        </main>

        <Footer />
    </>
  )
}

export default Details