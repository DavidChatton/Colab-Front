import axios from 'axios';
import Cookies from 'js-cookie';
import viewNav from '../views/nav';
import viewRegister from '../views/register/register';

const Register = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  attachEventListeners() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.addEventListener('blur', this.checkPassword.bind(this));
    }

    const togglePasswordButton = document.querySelector('.toggle-password');
    if (togglePasswordButton) {
      togglePasswordButton.addEventListener('click', this.togglePassword.bind(this));
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  // Modifie le comportement du bouton afin que ce dernier se comporte comme un lien
  attachRegisterEvent() {
    const registerButton = document.getElementById('btn-register');
    if (registerButton) {
      registerButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/inscription';
      });
    }
  }

  // Vérifie la longueur du mot de passe si pas la taille requis affiche un message
  checkPassword() {
    const passwordStrength = document.getElementById('password').value.length;
    const messageElement = document.getElementById('passwordMessage');

    if (passwordStrength < 8) {
      messageElement.textContent = 'Votre mot de passe est trop court, il doit comprendre au moins 8 caractères.';
    } else {
      messageElement.textContent = '';
    }
  }

  // Permet l'affichage du mot de passe et change l'icone en conséquence
  togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password i');

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

    const form = document.getElementById('registerForm');
    const submitButton = form.querySelector('button[type="submit"]');

    // Désactiver le bouton de soumission pour éviter les soumissions multiples
    submitButton.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('http://localhost:81/registration', data);
      console.log(response.data);
      if (response.status === 201) {
        Cookies.set('user_id', response.data.user_id, { expires: 30, path: '' });
        window.location.href = '/choix-colocation';
        console.log('Registration successful', 'success');
      } else {
        console.log(`Registration failed: ${response.data.message}`, 'error');
      }
    } catch (error) {
      console.log('An error occurred', error);
    } finally {
    // Réactiver le bouton de soumission après la tentative de soumission
      submitButton.disabled = false;
    }
  }

  render() {
    return `
      ${viewNav()}
      ${viewRegister()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.attachRegisterEvent();
    this.attachEventListeners();
  }
};

export default Register;
