import "./Alert.css";
import AlertText from "./AlertText";
function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`}>
      <div className="Alert-title-container">
        <img className="Alert-icon" src={`../src/assets/${props.type}.png`} />
        {props.title}
      </div>
      <AlertText type={props.type} />
    </div>
  );
}

export default Alert;
