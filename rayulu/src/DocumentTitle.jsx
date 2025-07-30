import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Cleaning and Maintenance Services - Office & Home - PCS Care',
  '/form': 'Contact Us - PCS Care',
  '/about': 'Top Cleaning and Maintance Company in Hyderabad - PCS Care',
  '/registration-certificate': 'Registration Certificate - PCS Care',
  '/contact': 'Best Office & Home Cleaning Company in Hyderabad - PCS Care',
  '/Corporate-services/carpet-cleaning': 'Corporate Carpet Cleaning Services - PCS Care',
  '/home-services/carpet-cleaning': 'Home Carpet Cleaning Services - PCS Care',
  '/home-services/marble-polishing': 'Home Marble Polishing Services - PCS Care',
  '/blog': 'Our Blogs - PCS Care',
  '/corporate-services': 'Industrial and Corporate Services - PCS Care',
  
};

const DocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'PCS Care';
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default DocumentTitle;