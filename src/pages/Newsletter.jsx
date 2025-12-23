import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Newsletter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home immediately, the footer will handle opening the modal
    navigate('/', { replace: true, state: { openNewsletter: true } });
  }, [navigate]);

  return null;
};

export default Newsletter;

