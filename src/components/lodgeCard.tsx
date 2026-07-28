import type React from "react"
import { Link } from "react-router-dom"
import {Star,MapPin} from "lucide-react"

export type lodgeCardProps = {
  id: string
  title: string
  location: string
  pictures: string[]
  tags: string[]
  host: Host
  rating: string
  description: string
  equipments: string[]
}

export type Host = {
  name: string
  picture: string
}

const LodgeCard: React.FC<lodgeCardProps> = ({id, title, location, pictures, tags, rating,}) => {
  const ratingValue = Number(rating)

  return (
    <Link to={`/logement/${id}`} className="lodgeCard">
        <img src={pictures[0]} alt={title} />
        <h3>{title}</h3>
        <p><MapPin/>{location}</p>
        <div className='tags'>
            {tags.map((tag, index) => (
                <p key={index} className="tag">{tag}</p>
            ))}
        </div>
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={star <= ratingValue ? "star filled" : "star"}
                  fill={star <= ratingValue ? "currentColor" : "none"}
                />
            ))}
        </div>
    </Link>
  )
}

export default LodgeCard