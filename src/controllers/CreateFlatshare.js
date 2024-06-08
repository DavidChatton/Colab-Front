import axios from 'axios';
import Cookies from 'js-cookie';
import createFlatshare from '../views/createFlatshare';

const CreateFlatshare = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const address = document.querySelector('#address').value;
    const userId = Cookies.get('user_id'); // Supposons que l'ID utilisateur est stocké dans un cookie

    if (!userId) {
      console.error('User ID is not defined');
      return;
    }

    console.log('Submitting form with:', { name, address, user_id: userId });

    axios.post('http://localhost:81/flatshares', { name, address, user_id: userId })
      .then((response) => {
        console.log('Response from server:', response.data);
        window.location.href = '/connexion';
      })
      .catch((error) => {
        console.error('Error from server:', error);
        // Afficher un message d'erreur à l'utilisateur
      });
  };

  render() {
    return `
    ${createFlatshare()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    const form = document.querySelector('form');
    form.addEventListener('submit', this.handleSubmit);
  }
};

export default CreateFlatshare;
