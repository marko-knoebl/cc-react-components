import './AlertText.css'

function AlertText(props) {
  function getTypeOfText(type) {
    if (type === "error") {
      return "This is an error alert";
    } else if (type === "warning") {
      return "This is a warning alert";
    } else if (type === "info") {
      return "This is an info alert";
    } else {
      return "This is a success alert";
    }
  }
  const text = getTypeOfText(props.type);
  return <div className="alert-text">{text}</div>;
}

export default AlertText;
