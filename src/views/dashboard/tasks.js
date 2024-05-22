import image_task from '../../images/task.svg';

const tasks = () => `
  <div class="col-5 rounded border border-primary ms-2">
    <h2 class="text-center"><img src="${image_task}" class="message-image" alt="">Tâches à faire</h2>
    <table class="table-responsive table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Tâches</th>
          <th scope="col">Description</th>
          <th scope="col">Catégorie</th>
          <th scope="col">Echéance</th>
          <th scope="col">Priorite</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Faire la vaiselle</th>
          <td>Laver et ranger les assiettes</td>
          <td>vaiselle</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <p> Sortir les poubelles</p>
  </div>
`;

export default tasks;
