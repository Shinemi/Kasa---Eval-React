import { useState } from "react"

type CarouselProps = {
  pictures: string[]
  alt: string
}

function Carousel({ pictures, alt }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const goNext = () => {
    setIndex((prev) => (prev + 1) % pictures.length)
  }

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + pictures.length) % pictures.length)
  }

  return (
    <div className="carousel">
      <img src={pictures[index]} alt={`${alt} - photo ${index + 1}`} />

      {pictures.length > 1 && (
          <div className="carousel-controls">
            <button onClick={goPrev}> ← </button>
            <button onClick={goNext}> → </button>
          </div>  
      )}
    </div>
  )
}

export default Carousel