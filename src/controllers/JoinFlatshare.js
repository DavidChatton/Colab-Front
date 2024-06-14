import axios from 'axios';
import Cookies from 'js-cookie';
import viewjoinFlatshare from '../views/joinFlatshare';

const JoinFlatshare = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const flatshareName = document.querySelector('#flatshare-name').value;
    const accessCode = document.querySelector('#flatshare-code').value;
    const userId = Cookies.get('user_id'); // l'ID utilisateur est stocké dans un cookie

    if (!userId) {
      console.error('User ID is not defined');
      return;
    }

    console.log('Submitting form with:', { flatshareName, access_code: accessCode, user_id: userId });

    axios.post('http://localhost:81/flatshare/join', { flatshareName, access_code: accessCode, user_id: userId })
      .then((response) => {
        console.log('Response from server:', response.data);
        // Rediriger l'utilisateur vers une page de confirmation ou de succès
        window.location.href = '/connexion';
      })
      .catch((error) => {
        console.error('Error from server:', error);
        // Afficher un message d'erreur à l'utilisateur
      });
  };

  render() {
    return `
    ${viewjoinFlatshare()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    const form = document.querySelector('form');
    form.addEventListener('submit', this.handleSubmit);
  }
};
export default JoinFlatshare;
