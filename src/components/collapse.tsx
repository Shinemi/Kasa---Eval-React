import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        
      >
        {title}
        <span> ▼ </span>
      </button>

      {isOpen && (
        <div style={{ padding: "12px 16px" }}>
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;