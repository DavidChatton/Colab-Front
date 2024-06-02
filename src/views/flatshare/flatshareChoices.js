import img_joinbackground from '../../images/join-flatsharing.jpg';
import img_createbackground from '../../images/create-flatsharing.jpg';

const flatshareChoices = () => `
<div class="container h-100 position-absolute top-50 start-50 translate-middle">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-6 col-lg-4 mb-4 colocation-card ">
        <div class="card text-center">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="${img_joinbackground}" class="img-fluid img-card-top" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Rejoindre une Colocation</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button type="button" class="btn btn-primary">Rejoindre une Colocation</button>
          </div>
        </div>
      </div>
  
      <div class="col-md-6 col-lg-4 mb-4 colocation-card ">
        <div class="card text-center">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="${img_createbackground}" class="img-fluid img-card-top"/>
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Crée une colocation</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button type="button" class="btn btn-primary">Crée une colocation</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
export default flatshareChoices;
