import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="my-auto rounded-3xl bg-white p-8 text-center shadow-soft md:p-12">
      <h1 className="text-3xl font-bold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">The page you requested could not be found.</p>
      <Link to="/" className="mt-6 inline-block font-medium">
        Go back home
      </Link>
    </main>
  );
}

export default NotFoundPage;
