import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/welcome"
            element={
              <motion.div
                className="mx-auto mt-20 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Home className="h-10 w-10 text-brand-500" />
                <h1 className="text-2xl font-semibold text-slate-900">Welcome to Petrolzz</h1>
                <p className="text-slate-600">Routing, motion, icons, and global styles are all wired.</p>
              </motion.div>
            }
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
