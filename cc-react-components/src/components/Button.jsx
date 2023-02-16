import "./Button.css";

export default function Button({ children, onClick, size }) {
  return (
    <button
      className={size === "large" ? "Button Button-large" : "Button"}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
