import { useState } from "react"
import { ChevronDown } from "lucide-react"
import '../styles/components/collapse.scss'
import '../styles/base/global.scss'

type CollapseProps = {
  title: string
  content: React.ReactNode
}

function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={isOpen ? "collapse-icon open" : "collapse-icon"} />
      </button>

      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  )
}

export default Collapse