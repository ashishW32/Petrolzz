import { useParams } from 'react-router-dom';

const stations = [
  { id: '1', name: 'Downtown Fuel Hub', fuelType: 'Unleaded 95', price: '$3.42' },
  { id: '2', name: 'Northside Gas & Go', fuelType: 'Diesel', price: '$3.89' },
  { id: '3', name: 'Riverside Energy', fuelType: 'Premium 98', price: '$4.11' },
];

export default function StationDetails() {
  const { id } = useParams();
  const station = stations.find((entry) => entry.id === id);

  if (!station) {
    return (
      <main>
        <h1>Station Not Found</h1>
        <p>
          We couldn&apos;t find a station with ID <strong>{id}</strong>. Please
          check the link and try again.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>{station.name}</h1>
      <p>
        <strong>Fuel:</strong> {station.fuelType}
      </p>
      <p>
        <strong>Current Price:</strong> {station.price}
      </p>
    </main>
  );
}
