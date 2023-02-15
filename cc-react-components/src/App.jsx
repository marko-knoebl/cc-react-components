import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Avatar from "./components/Avatar";
import Chip from "./components/Chip";
import Paper from "./components/Paper";
import Dialog from "./components/Dialog";

const menuItems = [
  { id: 1, name: "Home", url: "/home" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Pricing", url: "/pricing" },
  { id: 4, name: "Blog", url: "/blog" },
];
const dropdownMenuItems = [
  { id: 1, name: "Gallery", url: "/gallery" },
  { id: 2, name: "Contact", url: "/contact" },
  { id: 3, name: "Sign in", url: "/#" },
];

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleCloseDialog() {
    setIsOpen(false);
  }

  function showDialog() {
    return (
      <Dialog 
        alert={"you have at least 10 unread messages. you have to read them"}
        isOpen={isOpen}
        onClose={handleCloseDialog}
      ></Dialog>
    );
  }

  return (
    <div className="App">
      <div className="appBar">
        <AppBar
          menuItems={menuItems}
          dropdownMenuItems={dropdownMenuItems}
          appName={"COMPANY"}
        />
      </div>
      <Badge value={count}></Badge>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1, setIsOpen(true))}>
          count is {count}
        </button>
        {count > 10 && showDialog()}
      </div>

      <h2>Accordion</h2>
      <Accordion title="accordion with configurable content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        Sapiente magnam voluptatem veritatis quaerat eaque quae exercitationem
        porro facilis tempore eos!
        <br />
        Suscipit obcaecati repellendus corrupti dolorem molestias corporis
        quaerat mollitia qui.
      </Accordion>
      <Accordion title="another accordion">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        Sapiente magnam voluptatem veritatis quaerat eaque quae exercitationem
        porro facilis tempore eos!
        <br />
        Suscipit obcaecati repellendus corrupti dolorem molestias corporis
        quaerat mollitia qui.
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
      <h2>Avatar</h2>
      <Avatar props={"john doe"} />
      <h2>Chip</h2>
      <div className="chip">
        <Chip />
      </div>

      <h2>Paper</h2>
      <Paper props={"this is a Paper component"} />
    </div>
  );
}

export default App;
