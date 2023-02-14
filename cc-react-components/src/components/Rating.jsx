import "./Rating.css";

export default function Rating({ value }) {
  const starIds = [1, 2, 3, 4, 5];

  return (
    <div className="Rating">
      {starIds.map((id) => {
        if (id <= value) {
          return (
            <span key={id} className="Rating_Star Rating_Star-Full">
              ★
            </span>
          );
        } else {
          return (
            <span key={id} className="Rating_Star Rating_Star-Empty">
              ☆
            </span>
          );
        }
      })}
    </div>
  );
}
