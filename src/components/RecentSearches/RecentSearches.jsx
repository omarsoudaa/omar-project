import React from "react";
import "./RecentSearches.css";
import { FaPlane } from "react-icons/fa";

const RecentSearches = () => {
  const searches = [
    { from: "SIN", to: "LAX", date: "7 Sep 2021" },
    { from: "MY", to: "DUB", date: "9 Sep 2021" },
  ];

  return (
    <div className="recent-searches">
      <h4 className="title">RECENT SEARCHES</h4>
      <div className="search-cards">
        {searches.map((search, index) => (
          <div className="search-card" key={index}>
            <div className="route">
              <span className="airport-code">{search.from}</span>
              <span className="plane-icon">
                <FaPlane className="plane" />
              </span>
              <span className="airport-code">{search.to}</span>
            </div>
            <p className="departure">
              <strong>Depart On:</strong> {search.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
