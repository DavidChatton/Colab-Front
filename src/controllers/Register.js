import viewNav from '../views/nav';
import viewRegister from '../views/register/register';

const Register = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
    this.attachEventListeners();
  }

  // Modifie le comportement du bouton afin que ce dernier ce comporte comme un lien
  attachRegisterEvent() {
    document.getElementById('btn-register').addEventListener('click', (event) => {
      event.preventDefault(); // empêche le comportement par défaut du lien
      window.location.href = '/inscription';
    });
  }

  attachEventListeners() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.addEventListener('blur', this.checkPassword.bind(this));
    }
    const togglePasswordButton = document.querySelector('.toggle-password');
    if (togglePasswordButton) {
      togglePasswordButton.addEventListener('click', this.togglePasswordVisibility.bind(this)); // ajouter cet écouteur d'événements
    }
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  // Vérifie la longueur du mot de passe si pas la taille requis affiche un message
  checkPassword() {
    const passwordStrength = document.getElementById('password').value.length;
    const messageElement = document.getElementById('passwordMessage');

    if (passwordStrength < 8) {
      messageElement.textContent = 'Votre mot de passe est trop court, il doit comprendre au moins 8 caractères.';
    } else {
      messageElement.textContent = ''; // Deletes message if already present
    }
  }

  // Permet l'affichage du mot de passe et change l'icone en conséquence
  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.input-icon-eye');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
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
