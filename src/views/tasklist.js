const taskList = () => `
<div class="container mt-5">
  <h1>Task Management System</h1>
  <form id="taskForm" class="mb-4">
    <div class="mb-3">
      <label for="taskName" class="form-label">Task Name</label>
      <input type="text" class="form-control" id="taskName" name="task_name" required>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" name="task_description" required>
    </div>
    <div class="mb-3">
      <label for="deadline" class="form-label">Deadline</label>
      <input type="date" class="form-control" id="deadline_spot" name="deadline_spot" required>
    </div>
    <div class="mb-3">
      <label for="priority" class="form-label">Priority</label>
      <select class="form-control" id="task_priority" name="task_priority" required>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="category" class="form-label">Category</label>
      <input type="text" class="form-control" id="task_category" name="task_category" required>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select class="form-control" id="status" name="status" required>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="userId" class="form-label">User ID</label>
      <input type="number" class="form-control" id="user_id" name="user_id" required>
    </div>
    <button type="submit" class="btn btn-success">Add Task</button>
  </form>

  <div id="tasksTable"></div>
</div>
`;

export default taskList;
