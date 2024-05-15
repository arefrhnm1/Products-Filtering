import "./SortedByPrice.css";

export default function SortedByPrice({ selectedPrice, setSelectedPrice }) {
  const prices = [100, 200, 300];
  return (
    <div className="filter">
      <ul className="filter__list">
        {prices.map((price, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedPrice(price)}
              className={selectedPrice === price ? "active" : ""}
            >
              {price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// eror lens