import { useEffect } from 'react';
import Cookies from 'js-cookie';

const GoogleAnalyticsSetup = () => {
  useEffect(() => {
    // Configurar la cookie de Google Analytics con SameSite=None y Secure
    Cookies.set('_ga', 'GA1.2.123456789.1234567890', { 
      sameSite: 'None',
      secure: true // Asegúrate de configurar esto si tu sitio utiliza HTTPS
    });
  }, []);

  return null; // No necesitamos renderizar nada
}

export default GoogleAnalyticsSetup;