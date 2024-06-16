const CreeMessage = () => `
  <div class="container mt-5">
    <h1>Envoyer un message</h1>
    <form id="messageForm" class="mb-4">
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-success">Envoyer</button>
    </form>
  </div>
`;
export default CreeMessage;
