import React from "react";
import Button from "./Button";
import "./components.css";

export default function SearchFilters({
  query,
  onQueryChange,
  fuelType,
  onFuelTypeChange,
  sortBy,
  onSortByChange,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="pm-card"
      style={{ padding: "1rem", display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "0.75rem" }}
    >
      <input
        className="pm-focus-ring"
        type="search"
        value={query}
        onChange={(event) => onQueryChange?.(event.target.value)}
        placeholder="Search by city, station, or area"
        style={{ border: "1px solid #d1d5db", borderRadius: 8, padding: "0.6rem 0.7rem" }}
      />
      <select
        className="pm-focus-ring"
        value={fuelType}
        onChange={(event) => onFuelTypeChange?.(event.target.value)}
        style={{ border: "1px solid #d1d5db", borderRadius: 8, padding: "0.6rem 0.7rem" }}
      >
        <option value="all">All fuel</option>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
        <option value="electric">Electric</option>
      </select>
      <select
        className="pm-focus-ring"
        value={sortBy}
        onChange={(event) => onSortByChange?.(event.target.value)}
        style={{ border: "1px solid #d1d5db", borderRadius: 8, padding: "0.6rem 0.7rem" }}
      >
        <option value="distance">Nearest</option>
        <option value="price">Best price</option>
        <option value="rating">Top rated</option>
      </select>
      <Button type="submit">Search</Button>
    </form>
  );
}
