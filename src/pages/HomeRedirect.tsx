import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Navigate to /lp1 and replace the current entry in the history stack
    // This prevents users from going back to this redirect component
    navigate('/hvac', { replace: true });
  }, [navigate]); // Include navigate in dependency array
  
  // Return null for instant redirect without any visual flash
  return null;
};

export default HomeRedirect;