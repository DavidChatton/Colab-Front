import axios from 'axios';
import Cookies from 'js-cookie';
import checkSession from './CheckSession';
import viewNavbar from '../views/nav';
import viewMessage from '../views/message';

const Message = class {
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

  attachFormSubmitHandler() {
    const form = document.getElementById('messageForm');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await axios.post('http://localhost:81/messages', data);
        if (response.status === 200) {
          console.log('Message sent successfully', response.data);
          form.reset();
        } else {
          console.error('Failed to send message', response.statusText);
        }
      } catch (error) {
        console.error('Error sending message', error);
      }
    });
  }

  render() {
    const sessionId = Cookies.get('session_id');
    const isLoggedIn = !!sessionId;
    this.el.innerHTML = `
      ${viewNavbar(isLoggedIn)}
      ${viewMessage()}
    `;
  }

  run() {
    this.render();
    this.attachFormSubmitHandler();
    if (Cookies.get('session_id')) {
      this.attachLogoutEvent();
    }
  }
};

export default Message;
