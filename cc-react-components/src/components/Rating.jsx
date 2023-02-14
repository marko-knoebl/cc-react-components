import "./Rating.css";

export default function Rating({ value, onChange }) {
  const starIds = [1, 2, 3, 4, 5];

  return (
    <div className="Rating">
      {starIds.map((id) => {
        return (
          <span
            key={id}
            onClick={() => onChange(id)}
            className={
              id <= value
                ? "Rating_Star Rating_Star-Full"
                : "Rating_Star Rating_Star-Empty"
            }
          >
            {id <= value ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}
