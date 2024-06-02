import axios from 'axios';
import Cookies from 'js-cookie';
import viewNav from '../views/nav';
import viewLogin from '../views/login/login';

const Login = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
    this.attachEventListeners();
  }

  attachEventListeners() {
    const togglePasswordButton = document.getElementById('toggle-password');
    if (togglePasswordButton) {
      togglePasswordButton.addEventListener('click', this.togglePassword.bind(this));
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('#toggle-password .input-icon-eye-login');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');

    const form = document.getElementById('loginForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('http://localhost:81/login', data);
      if (response.status === 200) {
        Cookies.set('session_id', response.data.session_id, { path: '/' });
        window.location.href = '/tableau-de-bord';
        console.log('Login sucessful');
      } else {
        console.log(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.log('An error occurred', error);
    }
  }

  render() {
    return `
    ${viewNav()}
    ${viewLogin()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Login;
