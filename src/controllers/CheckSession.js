import axios from 'axios';
import Cookies from 'js-cookie';

// Fonction pour vérifier la session de l'utilisateur
const checkSession = async () => {
  const sessionId = Cookies.get('session_id');

  if (!sessionId) {
    console.log('Session ID is missing');
    return { status: 'error', message: 'Session ID is missing' };
  }

  console.log(`Session ID retrieved: ${sessionId}`);

  try {
    const response = await axios.post('http://localhost:81/check-session', { session_id: sessionId });

    switch (response.status) {
      case 200:
        console.log('Session is valid');
        return { status: 'success', message: 'Session is valid' };

      case 401:
        console.log('Invalid session');
        return { status: 'error', message: 'Invalid session' };

      case 400:
        console.log('Bad request');
        return { status: 'error', message: 'Bad request' };

      case 500:
        console.log('Server error');
        return { status: 'error', message: 'Server error' };

      default:
        console.log(`Unexpected status code: ${response.status}`);
        return { status: 'error', message: `Unexpected status code: ${response.status}` };
    }
  } catch (error) {
    // Gérer les erreurs de la requête
    if (error.response) {
      console.log(`Error response from server: ${error.response.status} - ${error.response.data.message}`);
      return { status: 'error', message: error.response.data.message };
    }

    if (error.request) {
      console.log('No response received from server:', error.request);
      return { status: 'error', message: 'No response received from server' };
    }

    console.log('Error setting up request:', error.message);
    return { status: 'error', message: 'Error setting up request' };
  }
};

export default checkSession;
