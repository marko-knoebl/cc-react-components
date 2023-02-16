import "./Switch.css";

export default function Switch({ children, onPress, id, classOfButton }) {
  return (
    <button id={id} className={classOfButton} onClick={() => onPress()}>
      {children}
    </button>
  );
}
