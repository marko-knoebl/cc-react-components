import "./Alert.css";

function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`}>
      <div className="title-container">
        <img className="icon" src={`../src/assets/${props.type}.png`} />
        {props.title}
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
}

export default Alert;
