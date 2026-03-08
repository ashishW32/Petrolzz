import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import stations from './data/stations';

function sortByDistanceFrom(referenceDistance, stationList) {
  return [...stationList].sort(
    (a, b) =>
      Math.abs(a.distance - referenceDistance) - Math.abs(b.distance - referenceDistance),
  );
}

export default function StationDetails() {
  const { stationId } = useParams();

  const station = useMemo(
    () => stations.find((item) => item.id === stationId) || null,
    [stationId],
  );

  const nearbyStations = useMemo(() => {
    if (!station) return [];

    return sortByDistanceFrom(
      station.distance,
      stations.filter((item) => item.id !== station.id),
    ).slice(0, 3);
  }, [station]);

  if (!station) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Station not found</h2>
        <p>The station id from route params does not match local data.</p>
        <Link to="/map">Back to map</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>{station.name}</h2>
      <p>{station.address}</p>
      <p>
        {station.distance} km away • {station.travelTime}
      </p>
      <p>Status: {station.status}</p>
      <p>Open: {station.openingHours}</p>
      <p>Rating: ⭐ {station.rating}</p>
      <p>Services: {station.services.join(', ')}</p>

      <h3>Fuel Prices (placeholder)</h3>
      <ul>
        {Object.entries(station.prices).map(([fuelType, price]) => (
          <li key={fuelType}>
            {fuelType.toUpperCase()}: ₹{price}
          </li>
        ))}
      </ul>

      <h3>Similar nearby stations</h3>
      <ul>
        {nearbyStations.map((item) => (
          <li key={item.id}>
            <Link to={`/station/${item.id}`}>{item.name}</Link> — {item.distance} km, ⭐{' '}
            {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
