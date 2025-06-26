import React from "react";

const Filter = ({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) => (
  <div style={{ marginBottom: "20px" }}>
    <input
      type="text"
      placeholder="Search by title"
      value={titleFilter}
      onChange={(e) => setTitleFilter(e.target.value)}
    />
    <input
      type="number"
      placeholder="Minimum rating"
      value={rateFilter}
      onChange={(e) => setRateFilter(e.target.value)}
    />
  </div>
);

export default Filter;
