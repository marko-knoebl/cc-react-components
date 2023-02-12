import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ title, children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Accordion">
      {/* always show the summary */}
      <div className="Accordion__Summary">
        <h3 className="Accordion__Title">{title}</h3>
        <button
          className="Accordion__Button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {/* if isOpen is true, also show the main content area */}
      {isOpen ? <div className="Accordion__Content">{children}</div> : null}
    </div>
  );
}
