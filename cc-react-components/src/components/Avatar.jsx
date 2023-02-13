import "./Avatar.css";

export default function Avatar({ props }) {
  return (
    <div className="avatar">
      <div className="text">
        {props.split(" ")[0][0]}
        {props.split(" ")[1][0]}
      </div>
    </div>
  );
}
