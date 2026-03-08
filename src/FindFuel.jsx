import { useMemo, useState } from 'react';
import stations from './data/stations';

const sorters = {
  nearest: (a, b) => a.distance - b.distance,
  rating: (a, b) => b.rating - a.rating,
  stock: (a, b) => b.stockPercentage - a.stockPercentage,
};

export default function FindFuel() {
  const [query, setQuery] = useState('');
  const [fuelFilter, setFuelFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('nearest');

  const results = useMemo(() => {
    return stations
      .filter((station) => {
        const searchSpace = `${station.name} ${station.address}`.toLowerCase();
        const queryMatch = searchSpace.includes(query.toLowerCase());
        const fuelMatch =
          fuelFilter === 'All' || station.availableFuels.includes(fuelFilter);
        const statusMatch = statusFilter === 'All' || station.status === statusFilter;
        return queryMatch && fuelMatch && statusMatch;
      })
      .sort(sorters[sortBy]);
  }, [query, fuelFilter, statusFilter, sortBy]);

  return (
    <div style={{ padding: 16 }}>
      <h2>Find Fuel</h2>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="search"
          placeholder="Search by city, highway, or station"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={fuelFilter} onChange={(e) => setFuelFilter(e.target.value)}>
          <option value="All">All Fuels</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
          <option value="EV Charging">EV Charging</option>
        </select>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">Any Status</option>
          <option value="Open">Open</option>
          <option value="Busy">Busy</option>
          <option value="Limited Stock">Limited Stock</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="nearest">Sort: Nearest</option>
          <option value="rating">Sort: Highest Rated</option>
          <option value="stock">Sort: Best Stock</option>
        </select>
      </div>

      <p>{results.length} stations found</p>

      <div style={{ display: 'grid', gap: 12 }}>
        {results.map((station) => (
          <article
            key={station.id}
            style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}
          >
            <h3>{station.name}</h3>
            <p>{station.address}</p>
            <p>
              {station.distance} km • {station.travelTime} • ⭐ {station.rating}
            </p>
            <p>
              {station.status} • Stock {station.stockPercentage}%
            </p>
            <p>Fuels: {station.availableFuels.join(', ')}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
