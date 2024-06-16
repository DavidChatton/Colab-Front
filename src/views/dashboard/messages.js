import image_message from '../../images/message.svg';

const messageList = () => `
  <div class="col-8">
    <h2 class="text-center rounded"> <img src="${image_message}" class="message-image" alt=""> Message</h2>
    <p class="rounded border border-1 ps-2 pe-2 pt-2 pb-2 text-center dashboard-message"> <i class="fa-solid fa-circle-exclamation"></i> Une fuite d'eau a été détectée dans la salle de bain. Merci de ne pas l'utiliser en attendant la réparation.
    </p>
  </div>
`;
export default messageList;
