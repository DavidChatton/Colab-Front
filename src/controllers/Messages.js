import axios from 'axios';
import Cookies from 'js-cookie';
import mesMessages from '../views/message';

const Message = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  async fetchMessages() {
    try {
      const response = await axios.get('http://localhost:81/messages');
      if (Array.isArray(response.data)) {
        return response.data;
      }
      console.error('Expected an array but received:', response.data);
      return [];
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const messageInput = document.querySelector('#message');
    const message = messageInput.value;
    const userId = Cookies.get('user_id'); // Assurez-vous que le cookie user_id est défini

    try {
      await axios.post('http://localhost:81/messages', { user_id: userId, message });
      messageInput.value = '';
      this.run();
    } catch (error) {
      console.error('Error posting message:', error);
    }
  }

  async handleEdit(id) {
    const newMessage = prompt('Entrez le nouveau message:');
    if (newMessage) {
      try {
        await axios.put('http://localhost:81/messages', { id, message: newMessage });
        this.run();
      } catch (error) {
        console.error('Error updating message:', error);
      }
    }
  }

  async handleDelete(id) {
    const isConfirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce message?');
    if (isConfirmed) {
      try {
        await axios.delete('http://localhost:81/messages', { data: { id } });
        this.run();
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  }

  async render() {
    const messages = await this.fetchMessages();
    return `
      ${mesMessages(messages)}
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
    document.querySelector('#message-form').addEventListener('submit', (event) => this.handleSubmit(event));

    document.querySelectorAll('.edit-btn').forEach((button) => {
      button.addEventListener('click', () => this.handleEdit(button.dataset.id));
    });

    document.querySelectorAll('.delete-btn').forEach((button) => {
      button.addEventListener('click', () => this.handleDelete(button.dataset.id));
    });
  }
};

export default Message;
