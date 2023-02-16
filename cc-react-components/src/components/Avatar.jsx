import "./Avatar.css";

export default function Avatar(props) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className="Avatar_container">
      <div
        className="Avatar_avatar"
        style={{ backgroundColor: "#" + randomColor }}
      >
        <div className="Avatar_avatar-text">
          <b>
            {props.avatarName.split(" ")[0][0]}
            {props.avatarName.split(" ")[1][0]}
          </b>
        </div>
      </div>
    </div>
  );
}
