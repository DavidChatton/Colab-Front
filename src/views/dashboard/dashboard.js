import viewMessage from './message';
import viewCalendar from './calendar';
import viewExpense from './expenses';
import viewTasks from './tasks';
import viewFooter from '../footer';

function viewDashboard() {
  return `
  <div class="container">
    <div class="row">
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

export default viewDashboard;
