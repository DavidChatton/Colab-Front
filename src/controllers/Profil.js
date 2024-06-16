import axios from 'axios';
import Cookies from 'js-cookie';
import checkSession from './CheckSession';
import viewNavbar from '../views/nav';
import viewProfil from '../views/profil';

const Profil = class {
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
    await this.loadProfileData();
    this.run();
  }

  async loadProfileData() {
    try {
      const userId = Cookies.get('user_id');
      const response = await axios.get(`http://localhost:81/profil/${userId}`);
      if (response.status === 200) {
        this.profileData = response.data;
      } else {
        console.error('Error loading profile', response.statusText);
        this.profileData = null;
      }
    } catch (error) {
      console.error('Error loading profile', error);
      this.profileData = null;
    }
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

  attachSaveEvent() {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
          const userId = Cookies.get('user_id');
          const response = await axios.put(`http://localhost:81/profil/${userId}`, data);
          console.log('Profile updated successfully', response.data);
        } catch (error) {
          console.error('Error updating profile', error);
        }
      });
    }
  }

  render() {
    const sessionId = Cookies.get('session_id');
    const isLoggedIn = !!sessionId;
    return `
      ${viewNavbar(isLoggedIn)}
      ${viewProfil(this.profileData)}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.attachLogoutEvent();
    this.attachSaveEvent();
  }
};

export default Profil;
