import "./FloatingActionButton.css";

export default function FloatingActionButton({buttonName, showResult, FloatingActionButtonClicked}) {

  return (
    <div className="FloatingActionButton_div">
      <button
        className="FloatingActionButton_FloatingActionButton"
        onClick = {() => showResult()}
      >
        {buttonName}
      </button>
      <div>{FloatingActionButtonClicked}</div>
    </div>
  );
}
