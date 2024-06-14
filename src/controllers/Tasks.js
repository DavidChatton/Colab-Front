import axios from 'axios';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import taskList from '../views/tasklist';

const Tasks = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.tasks = [];
    this.users = [];
    this.init();
  }

  // Methode asynchrone
  async init() {
    this.render();
    await this.loadUsers();
    this.populateUserDropdown();
    this.attachEventListeners();
    this.initializeDataTable();
  }

  render() {
    this.el.innerHTML = taskList();
  }

  // Remplit le menu déroulant des utilisateurs.
  async loadUsers() {
    try {
      const response = await axios.get('http://localhost:81/users');
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  populateUserDropdown() {
    const userSelect = document.getElementById('user_id');
    this.users.forEach((user) => {
      const option = document.createElement('option');
      option.value = user.id;
      option.text = user.name;
      userSelect.appendChild(option);
    });
  }

  attachEventListeners() {
    const taskForm = document.getElementById('taskForm');
    if (taskForm) {
      taskForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('taskForm');
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post('http://localhost:81/tasks', taskData);
      if (response.status === 201) {
        this.dataTable.addRow(response.data);
        form.reset();
      } else {
        console.error('Failed to add task:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  initializeDataTable() {
    axios.get('http://localhost:81/tasks')
      .then((response) => {
        this.dataTable = new Tabulator('#tasksTable', {
          data: response.data, // Pass the data directly to Tabulator
          layout: 'fitColumns', // Adjust columns to fit the width of the table
          responsiveLayout: 'collapse', // Enable responsive layout
          columns: [
            { title: 'Task ID', field: 'id', sorter: 'number' },
            {
              title: 'Task Name', field: 'task_name', sorter: 'string', headerFilter: 'input'
            },
            {
              title: 'Description', field: 'task_description', headerFilter: 'input'
            },
            {
              title: 'Deadline',
              field: 'deadline_spot',
              sorter: 'date',
              headerFilter: 'input',
              formatter: 'datetime',
              formatterParams: { outputFormat: 'MM/DD/YYYY' }
            },
            {
              title: 'Priority',
              field: 'task_priority',
              sorter: 'string',
              headerFilter: 'select',
              headerFilterParams: { values: ['All', 'High', 'Medium', 'Low'] },
              formatter: this.priorityFormatter
            },
            {
              title: 'Category', field: 'task_category', sorter: 'string', headerFilter: 'input'
            },
            {
              title: 'Status',
              field: 'status',
              sorter: 'string',
              headerFilter: 'select',
              headerFilterParams: { values: ['Pending', 'Completed'] }
            },
            { title: 'User ID', field: 'user_id', sorter: 'number' }
          ],
          pagination: 'local', // Enable local pagination
          paginationSize: 10, // Number of rows per page
          movableColumns: true, // Allow columns to be moved
          resizableRows: true, // Allow rows to be resized
          selectable: 1 // Allow row selection
        });
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });

    /* document.querySelector('#tasksTable').addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-task')) {
        const row = event.target.closest('tr');
        // Handle delete task logic here
      }
    }); */
  }

  priorityFormatter(cell) {
    const value = cell.getValue();
    let color = '';
    switch (value) {
      case 'High':
        color = 'red';
        break;
      case 'Medium':
        color = 'orange';
        break;
      case 'Low':
        color = 'green';
        break;
      default:
        break;
    }
    return `<span style="color: ${color};">${value}</span>`;
  }
};

export default Tasks;
