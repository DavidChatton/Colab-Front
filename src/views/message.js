const mesMessages = (messages) => `
  <div class="container mt-5">
    <h2>Mes Messages</h2>
    <form id="message-form">
      <div class="mb-3">
        <label for="message" class="form-label">Nouveau Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
    <hr />
    <h3>Messages</h3>
    <div id="message-list">
      ${messages.length > 0 ? messages.map((msg) => `
        <div class="message-item">
          <p>${msg.message}</p>
          <small>${new Date(msg.created_at).toLocaleString()}</small>
          <button class="btn btn-warning btn-sm edit-btn" data-id="${msg.id}">Modifier</button>
          <button class="btn btn-danger btn-sm delete-btn" data-id="${msg.id}">Supprimer</button>
        </div>
      `).join('') : '<p>No messages found.</p>'}
    </div>
  </div>
`;
export default mesMessages;
