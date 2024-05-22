import viewNav from '../views/nav';
import viewMessage from '../views/dashboard/message';
import viewCalendar from '../views/dashboard/calendar';
import viewExpense from '../views/dashboard/expenses';
import viewTasks from '../views/dashboard/tasks';
import viewFooter from '../views/footer';

const Dashboard = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  // Modifie le comportement du bouton afin que ce dernier ce comporte comme un lien
  attachRegisterEvent() {
    document.getElementById('btn-register').addEventListener('click', (event) => {
      event.preventDefault(); // empêche le comportement par défaut du lien
      window.location.href = '/inscription';
    });
  }

  render() {
    return `
    <div class="container">
      <div class="row">
        ${viewNav()}
        <h1 class="text-center mt-5 mb-3">Bienvenue David</h1>
        ${viewMessage()}
        ${viewCalendar()}
        ${viewExpense()}
        ${viewTasks()}
      </div>
    </div>
    ${viewFooter()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.attachRegisterEvent();
  }
};

export default Dashboard;
