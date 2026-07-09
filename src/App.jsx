import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import ApplyPage from './components/ApplyPage';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer';
import { loadSiteConfig } from './data/siteConfig';

export default function App() {
  const [siteConfig, setSiteConfig] = useState(loadSiteConfig());
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/admin' || hash === '#admin') {
        setActiveTab('Admin');
      }
    };
    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    window.addEventListener('popstate', checkAdminRoute);
    return () => {
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('popstate', checkAdminRoute);
    };
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case 'Events':
        return <EventsPage siteConfig={siteConfig} />;
      case 'About':
        return <AboutPage />;
      case 'Apply':
        return <ApplyPage />;
      case 'Admin':
        return (
          <AdminPage
            siteConfig={siteConfig}
            setSiteConfig={setSiteConfig}
            onBackToHome={() => {
              setActiveTab('Home');
              window.location.hash = '';
            }}
          />
        );
      default:
        return <HomePage onNavigate={setActiveTab} siteConfig={siteConfig} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas select-none">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
