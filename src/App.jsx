import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
// Lazy loading Layout and Pages
const MainLayout = React.lazy(() => import('./layouts/MainLayout'));
const Home = React.lazy(() => import('./pages/Home'));
const DummyPage = React.lazy(() => import('./pages/DummyPage'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show loader and luxurious feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<DummyPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
