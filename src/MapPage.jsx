import { useMemo, useState } from 'react';
import stations from './data/stations';

const statusColors = {
  Open: '#0ea5e9',
  Busy: '#f59e0b',
  'Limited Stock': '#ef4444',
};

export default function MapPage() {
  const [selectedId, setSelectedId] = useState(stations[0]?.id || null);

  const selectedStation = useMemo(
    () => stations.find((station) => station.id === selectedId) || null,
    [selectedId],
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', minHeight: '100vh' }}>
      <aside style={{ borderRight: '1px solid #e5e7eb', padding: '1rem', overflowY: 'auto' }}>
        <h2>Nearby Stations</h2>
        {stations.map((station) => {
          const isSelected = station.id === selectedId;
          return (
            <button
              key={station.id}
              onClick={() => setSelectedId(station.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                border: isSelected ? '2px solid #2563eb' : '1px solid #d1d5db',
                background: '#fff',
                borderRadius: 8,
                marginBottom: 12,
                padding: 12,
                cursor: 'pointer',
              }}
            >
              <strong>{station.name}</strong>
              <p style={{ margin: '8px 0' }}>{station.address}</p>
              <small>
                {station.distance} km • {station.travelTime}
              </small>
            </button>
          );
        })}
      </aside>

      <main style={{ padding: '1rem' }}>
        {selectedStation ? (
          <section>
            <h2>{selectedStation.name}</h2>
            <p>{selectedStation.address}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span style={{ color: statusColors[selectedStation.status] || '#111827' }}>
                {selectedStation.status}
              </span>
            </p>
            <p>
              <strong>Stock:</strong> {selectedStation.stockPercentage}%
            </p>
            <p>
              <strong>Available Fuels:</strong> {selectedStation.availableFuels.join(', ')}
            </p>
            <p>
              <strong>Services:</strong> {selectedStation.services.join(', ')}
            </p>
            <p>
              <strong>Hours:</strong> {selectedStation.openingHours}
            </p>

            <h3>Fuel Prices (placeholder)</h3>
            <ul>
              {Object.entries(selectedStation.prices).map(([fuelType, price]) => (
                <li key={fuelType}>
                  {fuelType.toUpperCase()}: ₹{price}
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: 16,
                border: '1px dashed #9ca3af',
                borderRadius: 8,
                minHeight: 220,
                display: 'grid',
                placeItems: 'center',
                color: '#6b7280',
              }}
            >
              Map Placeholder (lat: {selectedStation.lat}, lng: {selectedStation.lng})
            </div>
          </section>
        ) : (
          <p>No station selected.</p>
        )}
      </main>
    </div>
  );
}
