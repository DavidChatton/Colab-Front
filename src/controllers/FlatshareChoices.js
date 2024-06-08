import Cookies from 'js-cookie';
import viewflatshareChoices from '../views/flatshare/flatshareChoices';

const FlatshareChoices = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  handleCardClick(cardId) {
    const userId = Cookies.get('user_id');
    console.log('user_id');
    if (!userId) {
      console.error('User ID is not defined');
      return;
    }
    if (cardId === 'join-card') {
      window.location.href = '/rejoindre-colocation';
    } else if (cardId === 'create-card') {
      window.location.href = '/cree-colocation';
    }
  }

  render() {
    return `
    ${viewflatshareChoices()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();

    // Ajouter un gestionnaire d'événements de clic à la carte de rejoindre une colocation
    document.getElementById('join-card').addEventListener('click', () => {
      this.handleCardClick('join-card');
    });

    // Ajouter un gestionnaire d'événements de clic à la carte de créer une colocation
    document.getElementById('create-card').addEventListener('click', () => {
      this.handleCardClick('create-card');
    });
  }
};

export default FlatshareChoices;
