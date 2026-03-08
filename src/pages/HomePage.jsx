import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="my-auto rounded-3xl bg-white p-8 shadow-soft md:p-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">Baseline Ready</p>
      <h1 className="text-4xl font-bold text-slate-900">Vite + React Foundation</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        The project has Tailwind configured, required libraries included, base routes setup, and the requested folder architecture in place.
      </p>
      <Link
        to="/welcome"
        className="mt-8 inline-flex rounded-xl bg-brand-600 px-5 py-3 font-medium text-white no-underline hover:bg-brand-700"
      >
        View routed example
      </Link>
    </main>
  );
}

export default HomePage;
