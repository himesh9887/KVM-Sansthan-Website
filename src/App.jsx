import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import Layout from '@/components/layout/Layout';
import InitialLoader from '@/components/layout/InitialLoader';
import { SiteProvider } from '@/context/SiteContext';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1250);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <SiteProvider>
        <InitialLoader show={loading} />
        <Layout>
          <AppRoutes />
        </Layout>
      </SiteProvider>
    </BrowserRouter>
  );
}
