import "./Alert.css";

function Alert(props) {
  return (
    <div className={`alert-${props.type}`}>
      <div className="title-container">
        <img className="icon" src={props.icon} />
        {props.title}
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
}

export default Alert;
