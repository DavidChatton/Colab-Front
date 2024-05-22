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
