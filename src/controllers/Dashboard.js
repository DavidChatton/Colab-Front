import axios from 'axios';
import Cookies from 'js-cookie';
import checkSession from './CheckSession';
import viewNavbar from '../views/nav';
import viewDashboard from '../views/dashboard/dashboard';

const Dashboard = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.init();
  }

  async init() {
    // Vérifier la session
    const sessionCheck = await checkSession();
    if (sessionCheck.status !== 'success') {
      window.location.href = '/connexion';
      return;
    }
    // Continuer l'initialisation si la session est valide
    this.run();
  }

  attachRegisterEvent() {
    document.getElementById('btn-register').addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/inscription';
    });
  }

  attachLogoutEvent() {
    const logoutButton = document.getElementById('btn-logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', async () => {
        try {
          const response = await axios.post('http://localhost:81/logout', { session_id: Cookies.get('session_id') });
          if (response.status === 200) {
            // Supprimer tous les cookies pertinents
            Cookies.remove('session_id', { path: '/' });
            Cookies.remove('user_id', { path: '/' });
            Cookies.remove('flatshare_id', { path: '/' });

            window.location.href = '/connexion';
          } else {
            console.error('Failed to logout', response.statusText);
          }
        } catch (error) {
          console.error('Error during logout', error);
        }
      });
    }
  }

  render() {
    const sessionId = Cookies.get('session_id');
    const isLoggedIn = !!sessionId;
    return `
    ${viewNavbar(isLoggedIn)}
    ${viewDashboard()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    if (!Cookies.get('session_id')) {
      this.attachRegisterEvent();
    } else {
      this.attachLogoutEvent();
    }
  }
};

export default Dashboard;
