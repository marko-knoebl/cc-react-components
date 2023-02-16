import "./Chip.css";

export default function Chip({ children, id ,onPress }) {
  return (
    <div id={id}  className="container" >
      <p  className="text" >{children}</p>
      <img  className="trashbin"  src={"../images/trashbin.png"} onClick = {() => onPress()} />
    </div>
  );
}
