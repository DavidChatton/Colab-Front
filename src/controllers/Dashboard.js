import axios from 'axios';
import Cookies from 'js-cookie';
import checkSession from './CheckSession';
import viewNavbar from '../views/nav';
import viewDashboard from '../views/dashboard/dashboard';
import viewCalendar from '../views/dashboard/calendar';
import viewLogin from '../views/login/login';
import viewFooter from '../views/footer';

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
        await axios.post('http://localhost:81/logout', { session_id: Cookies.get('session_id') });
        Cookies.remove('session_id');
        window.location.href = '/connexion';
      });
    }
  }

  render() {
    const sessionId = Cookies.get('session_id');
    const isLoggedIn = !!sessionId;
    return `
    ${viewNavbar(isLoggedIn)}
      <div class="container">
        <div class="row">
          <h1 class="text-center mt-5 mb-3">Bienvenue David</h1>
          ${isLoggedIn ? `
            ${window.location.pathname === '/calendrier' ? viewCalendar() : ''}
            ${window.location.pathname === '/tableau-de-bord' ? viewDashboard() : ''}
          ` : viewLogin()}
        </div>
      </div>
      ${viewFooter()}
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
