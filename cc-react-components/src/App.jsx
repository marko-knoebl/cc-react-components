import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Avatar from "./components/Avatar";
import Chip from "./components/Chip";
import Paper from "./components/Paper";
import Card from "./components/Card";
import FloatingActionButton from "./components/FloatingActionButton";

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

  const [textsOfChip, setTextOfChips] = useState([
    { id: 1, text: "Delete" },
    { id: 2, text: "Add" },
  ]);

  function deleteChip(id) {
    setTextOfChips(textsOfChip.filter((chip) => chip.id !== id));
  }

  // Floating Action Button
  const [FAB1clicked, FAB1setClicked] = useState("click");
  const [FAB2clicked, FAB2setClicked] = useState("click");

  function FABdisplayClicked(stateIs, stateShouldBe) {
    stateIs === "click" ? stateShouldBe("click!!!") : stateShouldBe("click");
  }

  return (
    <div className="App">
      <div className="appBar">
        <AppBar
          menuItems={menuItems}
          dropdownMenuItems={dropdownMenuItems}
          name={"COMPANY"}
        />
      </div>
      <Badge value={count}></Badge>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
      <Avatar avatarName={"john doe"} />
      
      <h2>Chip</h2>
      {textsOfChip.map((textofchip) => (
        <Chip id={textofchip.id} onPress={() => deleteChip(textofchip.id)}>
          {textofchip.text}
        </Chip>
      ))}

      <h2>Paper</h2>
      <Paper props={"this is a Paper component"} />
      <div>
        <h2>Card</h2>
        <Card>This is supposed to be the card content</Card>
      </div>

      <h2>Floating Action Button</h2>
      <FloatingActionButton
        buttonName={"❀"}
        FloatingActionButtonClicked={FAB1clicked}
        showResult={() => FABdisplayClicked(FAB1clicked, FAB1setClicked)}
      />
      <FloatingActionButton
        buttonName={"This is a floating button!"}
        FloatingActionButtonClicked={FAB2clicked}
        showResult={() => FABdisplayClicked(FAB2clicked, FAB2setClicked)}
      />
    </div>
  );
}

export default App;
