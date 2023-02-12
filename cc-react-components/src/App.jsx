import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import AppBar from "./components/AppBar";

import Alert from "./components/Alert";
import Accordion from "./components/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <AppBar />
      </div>

      <h2>Accordion</h2>
      <Accordion title="accordion item with configurable content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Magnam eos fugiat quas eum mollitia blanditiis sunt earum, voluptas,
        numquam quae harum repudiandae facilis?
        <br />
        Porro rerum eius earum vitae corrupti corporis?
      </Accordion>
      <Accordion title="another accordion item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Magnam eos fugiat quas eum mollitia blanditiis sunt earum, voluptas,
        numquam quae harum repudiandae facilis?
        <br />
        Porro rerum eius earum vitae corrupti corporis?
      </Accordion>

      <h2>Alert</h2>
      <div className="alert-container">
        <Alert type={"error"} title={"Error"} text={"This is an error alert"} />
        <Alert
          type={"warning"}
          title={"Warning"}
          text={"This is a warning alert"}
        />
        <Alert type={"info"} title={"Info"} text={"This is an info alert"} />
        <Alert
          type={"success"}
          title={"Success"}
          text={"This is a success alert"}
        />
      </div>
    </div>
  );
}

export default App;
