import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import Layout from '@/components/layout/Layout';
import { SiteProvider } from '@/context/SiteContext';

export default function App() {
  return (
    <BrowserRouter>
      <SiteProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </SiteProvider>
    </BrowserRouter>
  );
}
