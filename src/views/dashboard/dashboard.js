import viewMessage from './message';
import viewCalendar from './calendar';
import viewExpense from './expenses';
import viewTasks from './tasks';

function viewDashboard() {
  return `
    ${viewMessage()}
    ${viewCalendar()}
    ${viewExpense()}
    ${viewTasks()}
  `;
}

export default viewDashboard;
