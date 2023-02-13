import { useState } from "react";
import "./Chip.css";

export default function Chip() {
  const [visibility, setVisibility] = useState("");

  return (
    <div
      className="container"
      style={{ display: `${visibility === "hidden" ? "none" : "block"}` }}
    >
      <p className="text">Delete</p>
      <img
        className="trashbin"
        src={"../images/trashbin.png"}
        onClick={() => setVisibility("hidden")}
      />
    </div>
  );
}
