import "./Alert.css";

function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`}>
      <div className="Alert-title-container">
        <img className="Alert-icon" src={`../src/assets/${props.type}.png`} />
        {props.title}
      </div>
      <div className="Alert-text">{props.text}</div>
    </div>
  );
}

export default Alert;
